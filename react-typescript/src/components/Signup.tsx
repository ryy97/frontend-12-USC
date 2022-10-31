import React from "react";
import "./Login.css";
const Signup = () => {
  return (
    <main>
      <div className="login_mainBackground">
        <div className="login_content">
          <div className="login_container">
            <div className="login_title">
              <h1>Sign in</h1>
            </div>
            <div>
              <form className="login_form">
                <label htmlFor="" className="login_label">
                  Name
                </label>
                <div className="login_input_container">
                  <input
                    type="text"
                    name="user-name"
                    id=""
                    className="login_input"
                  />
                </div>
                <label htmlFor="" className="login_label">
                  Password
                </label>
                <div className="login_input_container">
                  <input
                    type="text"
                    name="user-password"
                    id=""
                    className="login_input"
                  />
                </div>
              </form>
            </div>
            <div className="login_button_container">
              <button className="login_button">continue</button>
            </div>
          </div>
        </div>
        <footer className="login_footer">
          <p className="login_footer_content">please contact us</p>
          <p className="login_footer_content">please contact us</p>
          <p className="login_footer_content">please contact us</p>
        </footer>
      </div>
    </main>
  );
};

export default Signup;
