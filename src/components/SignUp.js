import React, { useState } from 'react'
import  styles from "./SignUp.module.css"

import InputControl from './InputControl'
import { Link } from 'react-router-dom'

export default function SignUp() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmission = () => {
    console.log(values);
  }

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
                        placeholder="Enter email addredd"
                        onChange={(event) => 
                          setValues((prev) => ({...prev, email: event.target.value}))} />

          <InputControl label="Password" type="password" 
                        placeholder="Enter Password"
                        onChange={(event) => 
                          setValues((prev) => ({...prev, password: event.target.value}))} /> 

          <div className={styles.footer}>
            <button onClick={handleSubmission} type="">Sign Up</button>

            <p>Already have an account?{" "} <span>
              <Link to="/signin">Login</Link>
            </span></p>
            
          </div>

        </div>
      </div>
    </div>
  )
}
