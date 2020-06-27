import React from "react"
import Header from "./Header"
import Navigation from "./Navbar"
import Sections from "./Sections"
import "../styles/App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.css"

export default () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Major+Mono+Display|Montserrat&display=swap"
        rel="stylesheet"
      />
      <Navigation />
      <Header />
      <Sections />
    </>
  )
}
