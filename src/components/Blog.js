import React from 'react'
import BlogCards from './BlogCards'
import BlogData from './BlogData'
import './Style.css'
import { NavLink } from 'react-router-dom';


export default function Blog() {
  return (
    <>
    <div className="container my-5">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className='col-10 mx-auto'>
            <nav className="navbar navbar-expand-lg navbar-light bgnav text-lg-start fixed-top">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img className="logoimg img-fluid img-thumbnail" src="data:image/png;base64,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"
                    alt="" />
                  <br />
                </NavLink>
                <button className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navtext" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className='nav-link' to="">Learn</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' to="">DocMakers</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' to="">UI Txt</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' to="">Lain Nya</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
      <div className='my-5'>
        <h1 className="text-center mrgn">Features Artikel</h1>

        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {
                  BlogData.map((value, index) => {
                    return <BlogCards
                      key={index}
                      imgsrc={value.imgsrc}
                      title={value.title}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
