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
      <Navigation />
      <Header />
      <Sections />
    </>
  )
}
