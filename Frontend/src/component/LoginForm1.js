import React, { useState } from "react";
import qs from "qs";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const LoginForm1 = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const login = () => {
    axios
      .post(
        "http://localhost:8080/account/login",
        qs.stringify({
          username: userId,
          password: password,
        })
      )
      .then((response) => {
        console.log(response);
        if (response.data.isLogin == true) {
          Cookies.set("user_id", response.data.user.user_id);
          Cookies.set("permission", response.data.user.permission);
          Cookies.set("username", response.data.user.username);
          Cookies.set("email", response.data.user.email);
          window.location.href = "/next/right1";
          alert("Login Success");
        } else {
          alert("Login Failed");
        }
      });
  };

  const userIdChange = (event) => {
    console.log(event.target.value);
    setUserId(event.target.value);
  };

  const passwordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  return (
    <div
      style={{
        flex: 1,
      }}
      id="login"
      class="input-group"
    >
      <input
        type="text"
        class="input-field"
        placeholder="Username"
        required
        onChange={userIdChange}
      />
      <input
        type="password"
        class="input-field"
        placeholder="Password"
        required
        onChange={passwordChange}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input type="checkbox" class="check-box" />
        <span>Remember Password</span>
      </div>
      <button class="submit-btn" onClick={login}>
        Log in
      </button>
    </div>
  );
};

export default LoginForm1;
