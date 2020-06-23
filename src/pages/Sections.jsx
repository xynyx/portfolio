import React from "react"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Sections() {
  return (
    <>
      <div className="section--top"></div>
      <div className="container-fluid">
        <div className="container-inner">
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}
