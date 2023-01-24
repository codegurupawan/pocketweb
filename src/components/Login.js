import React from 'react'
import  styles from "./Login.module.css"

import InputControl from './InputControl'

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div className={styles.heading}>
          <h1>Login</h1>

          <InputControl label="Email" placeholder="Enter email addredd" />
        </div>
      </div>
    </div>
  )
}
