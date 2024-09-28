import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../Capital_One_logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [signupFail, setSignupFail] = useState("");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    retypePassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.retypePassword) {
      const errorMessage = "Signup failed";
      setSignupFail(errorMessage);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8004/api/auth/signup",
        formData
      );
      if (response.data.token) {
        localStorage.setItem("userToken", response.data.token);
        console.log("Signup success:", response.data.message);
        navigate("/app");
      } else {
        const errorMessage = "Signup failed";
        setSignupFail(errorMessage);
      }
    } catch (error) {
      const errorMessage = "Signup failed";
      setSignupFail(errorMessage);
    }
  };

  return (
    <div className="body">
      <img src={logo} alt="Capital One Logo" className="logo" />
      <Box
        className="form-box"
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {signupFail && <div className="error-message">{signupFail}</div>}
        <TextField
          id="outlined-username"
          label="Username"
          variant="outlined"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          id="outlined-password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          id="outlined-password"
          label="Repeat Password"
          variant="outlined"
          type="password"
          name="retypePassword"
          value={formData.retypePassword}
          onChange={handleChange}
        />
        <Button
          className="redirect"
          onClick={() => {
            navigate("/login");
          }}
          type="button"
        >
          <span>{"Already have an account?"}</span>
        </Button>
        <Button
          className="center-button"
          sx={{
            backgroundColor: "rgb(71,140,209)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgb(0,72,120)",
            },
          }}
          variant="contained"
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default SignUp;
