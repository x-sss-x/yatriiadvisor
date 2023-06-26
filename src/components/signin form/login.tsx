"use client";
import React, { useState } from "react";
import LOG_button from "./LOG_button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email == "vishal@gmail.com" && password == "vishal1234") {
      router.replace("/");
    } else {
      alert("Wrong credentials !");
    }
  };

  return (
    <div className="pt-2 pb-8">
      <div
        className="font-bold text-button font-roboto text-center pt-2 pb-2"
        style={{ fontSize: 20 }}
      >
        <h1>Login</h1>
      </div>
      <div style={{ fontSize: 10 }}>
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
            value={email}
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
            <LOG_button />
            <br />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
