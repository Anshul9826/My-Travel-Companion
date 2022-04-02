import React, { useState } from "react";
import "./Common.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function SetNewPassword({ email }) {
  let navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [otp, setOtp] = useState("");
  const [errorField, setErrorField] = useState({
    passwordErr: "",
    cpasswordErr: "",
    otpCodeErr: "",
  });
  const validForm = () => {
    let formIsValid = true;
    setErrorField({
      passwordErr: "",
      cpasswordErr: "",
      otpCodeErr: "",
    });
    if (otp === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        otpCodeErr: "Please Enter OTP!",
      }));
    }
    if (password === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password!",
      }));
    }
    if (cpassword === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        cpasswordErr: "Please Enter Confirm Password!",
      }));
    }
    if (cpassword !== password) {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        cpasswordErr: "Password and Confirm Password should be same!",
      }));
    }

    return formIsValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validForm()) {
      const response = await fetch(
        "https://bloodwarriorsindia.herokuapp.com/api/auth/change_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
            password,
            cpassword,
          }),
        }
      );
      const json = await response.json();
      if (json.success) {
        toast.success(json.msg);
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      } else {
        toast.error(json.error);
      }
    } else {
      toast.error("Form is Invalid!");
    }
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      <ToastContainer />
      <h3>Change Password</h3>
      <input
        name="otp"
        placeholder="Enter Otp"
        value={otp}
        onChange={(e) => {
          setOtp(e.target.value);
        }}
      />
      {errorField.otpCodeErr.length > 0 && (
        <span className="error">{errorField.otpCodeErr}</span>
      )}
      <input
        type="password"
        name="password"
        placeholder="Enter New Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {errorField.passwordErr.length > 0 && (
        <span className="error">{errorField.passwordErr}</span>
      )}
      <input
        type="password"
        name="cpassword"
        placeholder="Confirm Password"
        value={cpassword}
        onChange={(e) => {
          setCpassword(e.target.value);
        }}
      />
      {errorField.cpasswordErr.length > 0 && (
        <span className="error">{errorField.cpasswordErr}</span>
      )}

      <div className="Btn Btn-Secondary" type="submit" onClick={handleSubmit}>
        Change Password
      </div>
    </form>
  );
}
