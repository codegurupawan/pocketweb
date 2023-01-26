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
                  <img className="logoimg img-fluid img-thumbnail" src=""
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
        <h1 className="text-center mrgn">Buy Or Sell Your Products</h1>

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
