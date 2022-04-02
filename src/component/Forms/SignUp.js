import React, { useState } from "react";
import "./Common.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { ToastContainer, toast } from "react-toastify";
import Login from "./Login";

function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();

  const [errorField, setErrorField] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    passwordErr: "",
    cpasswordErr: "",
  });
  const validForm = () => {
    let formIsValid = true;
    setErrorField({
      firstNameErr: "",
      lastNameErr: "",
      emailErr: "",
      passwordErr: "",
      cpasswordErr: "",
    });
    if (firstName === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        firstNameErr: "Field is required and atleast 3 characters!",
      }));
    }
    if (lastName === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        lastNameErr: "Field is required and atleast 3 characters!",
      }));
    }
    if (email === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        emailErr: "Email is required!",
      }));
    }
    if (password === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        passwordErr: "Field is required and atleast 5 characters!",
      }));
    }
    if (cpassword === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        cpasswordErr: "Field is required and atleast 5 characters!",
      }));
    }
    if (cpassword !== password) {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        cpasswordErr: "Passwords should be same!",
      }));
    }
    return formIsValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validForm()) {
      const response = await fetch(
        "https://bloodwarriorsindia.herokuapp.com/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        }
      );
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        toast.success(json.msg);
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        toast.error(json.error);
      }
    } else {
      toast.error("Form is Invalid!");
    }
  };
  return (
    <>
      <div className={props.Btn} onClick={handleOpen}>
        Sign Up
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <ToastContainer />
          <form id="form" onSubmit={handleSubmit}>
            <Link to="/">
              <img id="logo" src={props.logo} alt="Blood Warriors" />
            </Link>
            <input
              className="ms-0"
              type="name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {errorField.firstNameErr.length > 0 && (
              <span className="error">{errorField.firstNameErr}</span>
            )}
            <input
              className="me-0"
              type="name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {errorField.lastNameErr.length > 0 && (
              <span className="error">{errorField.lastNameErr}</span>
            )}
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errorField.emailErr.length > 0 && (
              <span className="error">{errorField.emailErr}</span>
            )}
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
            <div
              className="Btn Btn-Secondary"
              type="submit"
              onClick={handleSubmit}
              style={{ width: "50%" }}
            >
              Sign Up
            </div>
            <h6 className="mt-3">Or Sign Up with</h6>
            <div className="d-flex mb-3 my-2">
              <img
                className="me-3 ms-3 assetIcons"
                src="/assets/facebookIcon.png"
                alt="Facebook"
                style={{ width: "40px", height: "40px" }}
              />
              <img
                className="me-3 ms-3 assetIcons"
                src="/assets/GoogleIcon.png"
                alt="Google"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div className="d-flex align-items-center mt-3">
              <h6 className="mb-0 me-1">Already have account?</h6>
              <Login logo={props.logo} Btn={"BtnLink"}/>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default SignUp;
