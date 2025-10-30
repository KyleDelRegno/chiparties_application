'use client'

import test from "node:test";
import React, {useState} from "react";
import { firebaseAuth } from '@/firebase';

// export default function Login(){
//     return (
//         <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <div className="container">
//         <form id="loginForm">
//           <input type="email" id="loginEmail" placeholder="College Email" required></input>
//           <input type="password" id="loginPassword" placeholder="Password" required></input>
//         </form>
//         <div id="loginMessage"></div>
//       </div>
//     </div>
//     );

// };

const LoginPage: React.FC = () => {
  //Login form Constants
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //Login Script
  const loginHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //checks if a college email address
    if(!email.endsWith("@depaul.edu")){
      setMessage("Please use your college email you fucker");
      return;
    }

    //
  }
  //Login Form Web Display
  return (
    <div style={{ maxWidth: 320, margin: "auto", padding: 32 }}>
      <h2>College Email Login</h2>
      <form onSubmit={loginHandle}>
        <input type="email" placeholder="College Email" required value={email} 
          onChange={e => setEmail(e.target.value)}
          style={{ display: "block", marginBottom: 12, width: "100%" }}
        />
        <input type="password" placeholder="Password" required value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ display: "block", marginBottom: 12, width: "100%" }}
        />
        <button type="submit" style={{ width: "100%" }}>Login</button>
      </form>
      {message && <div style={{ marginTop: 16 }}>{message}</div>}
    </div>
  );

};

export default LoginPage;

// //firebase code to run the authentication tests
// const loginForm = document.getElementById('loginForm');
// const loginMessage = document.getElementById('loginMessage');

// loginForm.addEventListener('loginSubmit', function(e){
//   e.preventDefault();
//   const email = document.getElementById('loginEmail');
//   const password = document.getElementById('loginPassword')
// });
