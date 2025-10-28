import test from "node:test";
import React from "react";

export default function Page(){
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="container">
        <form id="LoginForm">
          <div className="input-group">
            <label>Email</label>
            <input type="text" placeholder="Only Chicago College Emails" required></input>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="insert password" required></input>
          </div>
        </form>
      </div>
    </div>
    );

};