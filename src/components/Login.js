import React from 'react'
import  styles from "./Login.module.css"

import InputControl from './InputControl'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div className={styles.heading}>
          <h1>Login</h1>

          <InputControl label="Email" type="text" placeholder="Enter email addredd" />
          <InputControl label="Password" type="password" placeholder="Enter Password" />

          <div className={styles.footer}>

            <p>{" "} <span>
              <Link className={styles.link1} to="/signup">Create Account</Link>
            </span>
            <span><Link className={styles.link2} to="">Forget Password</Link></span>
            </p>

            <button type="">Sign In</button>
            
          </div>

        </div>
      </div>
    </div>
  )
}
