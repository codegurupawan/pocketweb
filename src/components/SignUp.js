import React, { useState } from 'react'
import  styles from "./SignUp.module.css"

import InputControl from './InputControl'
import { Link } from 'react-router-dom'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function SignUp() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrormsg] = useState("");

  const [submitButtonDisabled , setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if(!values.name || !values.email || !values.password){
      setErrormsg("All fields are mandatory");
      return;
    }
    setErrormsg("");

    setSubmitButtonDisabled(true);
    
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        console.log(user);
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
          <h1>SignUp</h1>

          <InputControl label="Name" type="text" 
                        placeholder="Enter your name"
                        onChange={(event) => 
                          setValues((prev) => ({...prev, name: event.target.value}))} />

          <InputControl label="Email" type="email" 
                        placeholder="Enter email address"
                        onChange={(event) => 
                          setValues((prev) => ({...prev, email: event.target.value}))} />

          <InputControl label="Password" type="password" 
                        placeholder="Enter Password"
                        onChange={(event) => 
                          setValues((prev) => ({...prev, password: event.target.value}))} /> 

          <div className={styles.footer}>
            
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission} 
                    disabled={submitButtonDisabled}>Sign Up</button>

            <p>Already have an account?{" "} <span>
              <Link to="/signin">Login</Link>
            </span></p>
            
          </div>

        </div>
      </div>
    </div>
  )
}
