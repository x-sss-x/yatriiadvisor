"use client";
import React, { useState } from "react";
import LOG_button from "./LOG_button";
import Link from "next/link";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="pt-2 pb-8">
      <div
        className="font-bold text-button font-roboto text-center pt-2 pb-2"
        style={{ fontSize: 20 }}
      >
        <h1>Login</h1>
      </div>
      <form style={{ fontSize: 10 }}>
        <div
          className="font-bold text-button font-roboto flex pt-2 pb-2 container flex pl-4"
          style={{ fontSize: 14 }}
        >
          <label htmlFor="username">Username:</label>
          <br />
        </div>
        <div className="pl-4">
          <input
            className="rounded-full pl-20 pr-20 pb-2 pt-2 border-b border-button border-t shadow-lg"
            style={{ fontSize: 14 }}
            type="text"
            placeholder="Name"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div
          className="font-bold text-button font-roboto pt-4 pb-2 pl-4"
          style={{ fontSize: 14 }}
        >
          <label htmlFor="password">Password:</label>
          <br />
        </div>
        <div className="pl-4">
          <input
            className="rounded-full pl-20 pr-20 pb-2 pt-2  border-b border-button border-t shadow-lg"
            style={{ fontSize: 14 }}
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pl-4">
          <button
            type="submit"
            className="pl-15 pr-15 pt-6 container  "
            onClick={handleLogin}
          >
            <Link href={"/"}>
              <LOG_button />
            </Link>
            <br />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
