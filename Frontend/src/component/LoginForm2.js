import React, { useState } from "react";
import qs from "qs";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const LoginForm2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const register = () => {
    axios
      .post(
        "http://localhost:8080/account/register",
        qs.stringify({
          username: username,
          password: password,
          email: email,
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
          alert("Register Success");
        }
      });
  };
  const userIdChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const passwordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const EmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  return (
    <form style={{ flex: 1 }} id="register" class="input-group">
      <input
        type="text"
        class="input-field"
        placeholder="Username"
        onChange={(ev) => setUsername(ev.target.value)}
        required
      />
      <input
        type="email"
        class="input-field"
        placeholder="Email"
        onChange={(ev) => setEmail(ev.target.value)}
        required
      />
      <input
        type="password"
        class="input-field"
        placeholder="Password"
        onChange={(ev) => setPassword(ev.target.value)}
        required
      />
      <input type="checkbox" class="check-box" />
      <span>I agree to the terms & conditions</span>
      <button type="submit" class="submit-btn" onClick={register}>
        Register
      </button>
    </form>
  );
};

export default LoginForm2;
