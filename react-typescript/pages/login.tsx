import React from "react";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Login = () => {
  return (
    <main>
      <div className={styles.login_mainBackground}>
        <div className={styles.login_content}>
          <div className={styles.login_container}>
            <div className={styles.login_title}>
              <h1>Sign in</h1>
            </div>
            <div>
              <form className={styles.login_form}>
                <label htmlFor="" className={styles.login_label}>
                  Name
                </label>
                <div className={styles.login_input_container}>
                  <input
                    type="text"
                    name="user-name"
                    id=""
                    className={styles.login_input}
                  />
                </div>
                <label htmlFor="" className={styles.login_label}>
                  Password
                </label>
                <div className={styles.login_input_container}>
                  <input
                    type="text"
                    name="user-password"
                    id=""
                    className={styles.login_input}
                  />
                </div>
              </form>
            </div>
            <div className={styles.login_button_container}>
              <button className={styles.login_button}>continue</button>
              <Link href="/signup" style={{ textDecoration: "none" }}>
                <button className={styles.login_button}>
                  create your account
                </button>
              </Link>
            </div>
          </div>
        </div>
        <footer className={styles.login_footer}>
          <p className={styles.login_footer_content}>please contact us</p>
          <p className={styles.login_footer_content}>please contact us</p>
          <p className={styles.login_footer_content}>please contact us</p>
        </footer>
      </div>
    </main>
  );
};

export default Login;
