import React, { useState } from "react";

const LoginForm1 = () => {
  const login = () => {
    console.log(userId, password);
  };

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

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
