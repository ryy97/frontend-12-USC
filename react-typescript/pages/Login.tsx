import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import { GoogleLogin } from "react-google-login";
import {
  GoogleLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";
import {
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  InputAdornment,
  Checkbox,
  Grid,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// import { authenticate, onSuccessGoogle, onFailureGoogle } from "../store";

// MUI hook for generate and apply styles from classic .css way
// const useStyles = makeStyles({
//   textfield: {
//     display: "inline-Block",
//   },
// });

const Login = (props) => {
  // const classes = useStyles();

  const [isRemember, setIsRemember] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    fetch(
      `http://localhost:8080/login?username=${username}&password=${password}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    router.push("/");
  };

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 380,
    margin: "150px auto",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Link href="/">
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Abril Fatface",
                fontWeight: "600",
                marginTop: "5px",
                marginBottom: "15px",
              }}
            >
              Welcome to Wood by Nature.
            </Typography>
          </Link>
        </Grid>
        <form onSubmit={handleSubmit} name="login">
          <FormControl
            variant="standard"
            className="textfield"
            sx={{ margin: "8px" }}
            fullWidth
            required
          >
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input name="username" />
          </FormControl>
          <FormControl
            variant="standard"
            className="textfield"
            sx={{ margin: "8px" }}
            fullWidth
            required
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography color="textSecondary" sx={{ margin: "8px" }}>
            <strong>Forgot your password?</strong>
          </Typography>
          <FormControlLabel
            label="Remember Me"
            control={
              <Checkbox
                checked={isRemember}
                onChange={() => setIsRemember(!isRemember)}
              />
            }
            sx={{ marginTop: "8px", marginBottom: "8px", marginLeft: "-3px" }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              margin: "0",
              backgroundColor: "#98798E",
              fontWeight: "600",
            }}
            type="submit"
            fullWidth
          >
            Login
          </Button>
        </form>
        <Grid align="center">
          <h5>OR</h5>
          <hr />
          {/* <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            render={(renderProps) => (
              <GoogleLoginButton
                disabled={renderProps.disabled}
                align="center"
                style={{ backgroundColor: "#dc4a3d", color: "white" }}
                activeStyle={{ backgroundColor: "#e82517" }}
                onClick={renderProps.onClick}
              >
                <span>Log in with Google</span>
              </GoogleLoginButton>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
          <FacebookLoginButton
            align="center"
            onClick={() => (window.location = "/auth/facebook")}
          >
            <span>Log in with Facebook</span>
          </FacebookLoginButton>
          <TwitterLoginButton
            align="center"
            onClick={() => (window.location = "/auth/twitter")}
          >
            <span>Log in with Twitter</span>
          </TwitterLoginButton>
          <InstagramLoginButton
            align="center"
            onClick={() => console.log("Instagram login")}
          >
            <span>Log in with Instagram</span>
          </InstagramLoginButton> */}
          <Typography
            color="textSecondary"
            sx={{ marginTop: "15px", fontSize: 14, marginBottom: "10px" }}
          >
            By continuing, you agree to Wood by Nature's{" "}
            <strong>Terms of Service, Privacy Policy</strong>
          </Typography>
          <hr style={{ width: "50%" }}></hr>
          <Typography color="textSecondary" sx={{ marginTop: "10px" }}>
            <strong>
              Not on Wood by Nature<sup>®</sup> yet?
            </strong>
            <br />
            <a href="/Signup">
              <span style={{ color: "#98798E", textDecoration: "underline" }}>
                {" "}
                Sign up{" "}
              </span>
            </a>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
