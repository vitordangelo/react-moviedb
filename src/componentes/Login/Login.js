import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import { Wrapper } from "./Login.styles";

import { Context } from "../../context";
import API from "../../API";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);

    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );

      setUser({ sessionId: sessionId.session_id, username });
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Wrapper>
      {error && <div className="error">There was an error!</div>}

      <label>Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="password"
        value={password}
        name="password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
