import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("username:", username, "password:", password);
    fetch(
      `http://localhost:8080/login?username=${username}&password=${password}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ username, password }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

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
                    value={username}
                    type="text"
                    name="user-name"
                    id=""
                    className={styles.login_input}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <label htmlFor="" className={styles.login_label}>
                  Password
                </label>
                <div className={styles.login_input_container}>
                  <input
                    value={password}
                    type="text"
                    name="user-password"
                    id=""
                    className={styles.login_input}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className={styles.login_button_container}>
              <button className={styles.login_button} onClick={handleLogin}>
                continue
              </button>
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
