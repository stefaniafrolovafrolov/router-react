import React from "react"
import pagenotfound from "../images/deec01f1a6b0cc169f292a672c9206a9.webp"

function NotFound() {
  return (
    <>
      <main className="content">
        <h1 className="notfound">ЧТО-ТО ПОШЛО НЕ ТАК</h1>
        <img className="notfound__image" src={pagenotfound} alt="page 404" />
      </main>
    </>
  )
}

export default NotFound
