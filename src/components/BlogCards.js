import React from 'react'
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
                        
                    </div>
                </div>
            </div>
        </>
    )
}
