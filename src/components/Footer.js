import React from "react"
import bmwimage from "../images/fd8df06c88e02540212b0eec41ad3a58.jpg"
import bmwimage2 from "../images/i.webp"
import bmwimage3 from "../images/6055ae3fc2648f308f8ad67d912941b8.jpg"

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__image" src={bmwimage} alt="бмв" />
      <img className="footer__image" src={bmwimage2} alt="бмв" />
      <img className="footer__image" src={bmwimage3} alt="бмв" />
    </footer>
  )
}

export default Footer
