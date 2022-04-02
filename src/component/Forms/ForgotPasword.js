import React, { useState } from "react";
import "./Common.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SetNewPassword from "./SetNewPassword";
import Modal from "@mui/material/Modal";

function ForgotPasword(props) {
  const [email, setEmail] = useState("");

  const [showOtpForm, setShowOtpForm] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendOtp = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://bloodwarriorsindia.herokuapp.com/api/auth/email_send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      toast.success(json.msg);
      setShowOtpForm(false);
    } else {
      toast.error(json.error);
    }
  };

  return (
    <>
      <div className={props.Btn} onClick={handleOpen}>
        Forgot password
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <ToastContainer />
          {showOtpForm ? (
            <form id="form">
              <Link to="/">
                <img id="logo" src={props.logo} alt="Blood Warriors" />
              </Link>
              <h3>Enter Your Email</h3>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="Btn Btn-Secondary my-3" onClick={sendOtp} style={{width:"50%"}}>
                Send Otp
              </div>
            </form>
          ) : (
            <SetNewPassword email={email} />
          )}
        </div>
      </Modal>
    </>
  );
}

export default ForgotPasword;
