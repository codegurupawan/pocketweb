import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'

export default function BlogCards(props) {


    return (
        <>
            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top imgcards" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                            {props.title}
                        </h5>
                        <p className="card-text">If you are buying anything, you will
                            get it on best price and  if  you are
                            selling anything you will get the best
                            value for your products.</p>
                        <NavLink to="buyproduct" className="btnwidth btn btn-primary">Buy</NavLink>
                        <NavLink to="sellproduct" className="btnwidth ms-2 btn btn-primary">Sell</NavLink>
                        {/* <Outlet/> */}

                    </div>
                </div>
            </div>
        </>
    )
}
