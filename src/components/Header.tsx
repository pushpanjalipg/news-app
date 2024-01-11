import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Header() {
  const categories = useSelector((state: any) => state.categories);
  console.log(categories);
  
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            {
              categories.length > 0 && categories.map((cat:string, index: number) => (
                <li className="nav-item"  key={index}>
                  <Link className="nav-link active text-capitalize" to={`/category/${cat}`}>{cat}</Link>
                </li>
              ))
            }          
          </ul>
        </div>
      </div>
    </nav>
  )
}
