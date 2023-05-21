import React from "react"
import house from "../images/house.webp"

function Home() {
  return (
    <main className="content">
      <h1 className="bmw__title">HOME PAGE</h1>
      <img className="main__image" src={house} alt="дом" />
    </main>
  )
}

export default Home
