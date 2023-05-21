import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import bmw from "../images/bmwwwww.webp"
import Home from "../pages/Home"

function Bmwpage() {
  return (
    <>
      <main className="content">
        <Link to="/home">
          <h2>На главную страницу HOME</h2>
        </Link>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <h1 className="bmw__title">BMW M-SPORT</h1>
        <img className="main__image" src={bmw} alt="bmw" />
      </main>
    </>
  )
}

export default Bmwpage
