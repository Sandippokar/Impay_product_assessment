import React, { useState } from "react";
import style from "./Login.module.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    let data = JSON.stringify({
      // "username": username,
      // "password": password
      username: "mor_2314",
      password: "83r5^_",  //for get auth token send details which is available in users API
    });

    try {
      const res = await axios.post(
        `https://fakestoreapi.com/auth/login`,
        data,
        {
          headers: headers,
        }
      );

      if (res.status === 200) {
        //set jwt auth token in local storage
        localStorage.setItem("token", res.data.token);
        window.location.href = "/products";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.container}>
      <h1>Login Page</h1>
      <form className={style.form}>
        <div className={style.section}>
          <label className={style.title}>Username :</label>
          <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setUsername(e.target.valuecontinue)}
            className={style.input}
          />
        </div>
        <div className={style.section}>
          <label className={style.title}>Password :</label>
          <input
            type="password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.input}
          />
        </div>
        <div className={style.section}>
          <button
            type="submit"
            className={style.button}
            onClick={handleSubmit}
            disabled={username === "" || password === "" ? true : false}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
