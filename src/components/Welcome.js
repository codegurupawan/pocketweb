import React from 'react'
import "./Main.css";
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div className="bdycls">
            <div className="linkcls">
                <div className="wel1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTuiznXmA4XPtMrHB5mnd9jx6ooCmzBnArg&usqp=CAU" alt="/home" />
                    <h1>Welcome To Bardeen</h1>
                </div>

                <div>
                    <Link to="/signin"> <button type="">Sign In</button> </Link>
                    <Link to="/signup"> <button type="">SignUp</button> </Link>
                </div>
            </div>

        </div>
    )
}
