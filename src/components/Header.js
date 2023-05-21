import React from "react"
import { Routes, Route, Link, Navigate } from "react-router-dom"
import Bmwpage from "../pages/Bmwpage"
import Mersedes from "../pages/Mersedes"
import NotFound from "../pages/Notfound"
import Home from "../pages/Home"

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/home">
          {" "}
          <button className="header__button">HOME</button>
        </Link>
        <Link to="/bmw">
          {" "}
          <button className="header__button">BMW M-SPORT</button>
        </Link>
        <Link to="/mersedes">
          {" "}
          <button className="header__button">MERSEDES S-CLASS</button>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/bmw" element={<Bmwpage />} />
        <Route path="/mersedes" element={<Mersedes />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Header
