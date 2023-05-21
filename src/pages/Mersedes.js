import React from "react"
import mersedes from "../images/mersedes.webp"
import { Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"

function Mersedes() {
  return (
    <>
      <main className="content">
        <Link to="/home">
          <h2>На главную страницу HOME</h2>
        </Link>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <h1 className="mersedes__title">MERSEDES S-SPORT</h1>
        <img className="main__image" src={mersedes} alt="bmw" />
      </main>
    </>
  )
}

export default Mersedes
