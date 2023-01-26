import React, { useState } from 'react'
import styles from "./Login.module.css"
import './Main.css'

import InputControl from './InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


export default function Login() {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrormsg] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrormsg("All fields are mandatory");
      return;
    }
    setErrormsg("");

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/blog");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrormsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div className={styles.heading}>

          <div className="wel1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTuiznXmA4XPtMrHB5mnd9jx6ooCmzBnArg&usqp=CAU" alt="/home" />
            <div className='wellhead'>
              <h1>Welcome To Bardeen</h1>
              <p>Let's login to launch your automations</p>
            </div>
          </div>
          <h1>Login</h1>

          <InputControl label="Email" type="email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="Enter email address" />

          <InputControl label="Password" type="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, password: event.target.value }))}
            placeholder="Enter Password" />

          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>


            <p>{" "} <span>
              <Link className={styles.link1} to="/signup">Create Account</Link>
            </span>
              <span><Link className={styles.link2} to="">Forget Password</Link></span>
            </p>

            <button disabled={submitButtonDisabled} onClick={handleSubmission}>Sign In</button>

          </div>

        </div>
      </div>
    </div>
  )
}
