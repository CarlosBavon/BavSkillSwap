import React, { useState } from "react";
import "../../styles/LoginRegister.css";
import "boxicons";

const LoginRegister = () => {
  const [active, setActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);

  return (
    <div className={`container ${active ? "active" : ""}`}>
      {/* Curved shapes */}
      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>

      {/* Login Form */}
      <div className="form-box Login">
        <h2 className="animation" data-d="0" data-s="21">
          Login
        </h2>
        <form>
          <div className="input-box animation" data-d="1" data-s="22">
            <input type="text" required />
            <label>Username</label>
            <box-icon type="solid" name="user" color="#780083"></box-icon>
          </div>

          <div
            className="input-box animation password-box"
            data-d="2"
            data-s="23"
          >
            <input type={showPassword ? "text" : "password"} required />
            <label>Password</label>
            <box-icon name="lock-alt" type="solid" color="#780083"></box-icon>
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <box-icon
                name={showPassword ? "hide" : "show"}
                color="#780083"
              ></box-icon>
            </span>
          </div>

          <div className="input-box animation" data-d="3" data-s="24">
            <button className="btn" type="submit">
              Login
            </button>
          </div>

          <div className="regi-link animation" data-d="4" data-s="25">
            <p>
              Don&apos;t have an account? <br />
              <span
                className="SignUpLink"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(true);
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>

      {/* Login Info */}
      <div className="info-content Login">
        <h2 className="animation" data-d="0" data-s="20">
          WELCOME BACK!
        </h2>
        <p className="animation" data-d="1" data-s="21">
          We are happy to have you with us again. If you need anything, we are
          here to help.
        </p>
      </div>

      {/* Register Form */}
      <div className="form-box Register">
        <h2 className="animation" data-li="17" data-s="0">
          Register
        </h2>
        <form>
          <div className="input-box animation" data-li="18" data-s="1">
            <input type="text" required />
            <label>Username</label>
            <box-icon type="solid" name="user" color="#780083"></box-icon>
          </div>

          <div className="input-box animation" data-li="19" data-s="2">
            <input type="email" required />
            <label>Email</label>
            <box-icon name="envelope" type="solid" color="#780083"></box-icon>
          </div>

          <div
            className="input-box animation password-box"
            data-li="19"
            data-s="3"
          >
            <input type={showRegPassword ? "text" : "password"} required />
            <label>Password</label>
            <box-icon name="lock-alt" type="solid" color="#780083"></box-icon>
            <span
              className="toggle-password"
              onClick={() => setShowRegPassword(!showRegPassword)}
            >
              <box-icon
                name={showRegPassword ? "hide" : "show"}
                color="#780083"
              ></box-icon>
            </span>
          </div>

          <div className="input-box animation" data-li="20" data-s="4">
            <button className="btn" type="submit">
              Register
            </button>
          </div>

          <div className="regi-link animation" data-li="21" data-s="5">
            <p>
              Already have an account? <br />
              <span
                className="SignInLink"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(false);
                }}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>

      {/* Register Info */}
      <div className="info-content Register">
        <h2 className="animation" data-li="17" data-s="0">
          WELCOME!
        </h2>
        <p className="animation" data-li="18" data-s="1">
          We’re delighted to have you here. If you need any assistance, feel
          free to reach out.
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
