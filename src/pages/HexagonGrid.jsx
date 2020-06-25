import React, { useState } from "react"

export default function HexagonGrid() {
  const [hovering, setHovering] = useState(false)

  const toggleHoverState = () => {
    setHovering(!hovering)
  }

  const handleMouseHover = () => {
    setHovering(toggleHoverState)
  }

  return (
    <div className="hexagon-container">
      <a
        className="hex-link"
        target="_blank"
        href="https://focuspocus.netlify.app/"
      >
        <div
          onMouseEnter={() => handleMouseHover()}
          onMouseLeave={() => handleMouseHover()}
          className="hexagon"
          id="focuspocus"
        >
          {hovering && <div className="hexagon-text">FocusPocus</div>}
          <div className="hexTop"></div>
          <div className="hexBottom"></div>
        </div>
      </a>
      <a
        className="hex-link"
        target="_blank"
        href="https://lhl-lockr.herokuapp.com/"
      >
        <div className="hexagon" id="lockr">
          <div className="hexTop"></div>
          <div className="hexBottom"></div>
        </div>
      </a>
      <a
        className="hex-link"
        target="_blank"
        href="https://5edede9ee1b44c0007822d3e--heuristic-williams-fba968.netlify.app/"
      >
        <div className="hexagon" id="color-picker">
          <div className="hexTop"></div>
          <div className="hexBottom"></div>
        </div>
      </a>
      <a
        className="hex-link"
        target="_blank"
        href="https://mtg-funny-card-search.netlify.app/"
      >
        <div className="hexagon" id="mtg">
          <div className="hexTop"></div>
          <div className="hexBottom"></div>
        </div>
      </a>

      <a
        className="hex-link"
        target="_blank"
        href="https://forex-converter.netlify.app/"
      >
        <div className="hexagon" id="forex">
          <div className="hexTop"></div>
          <div className="hexBottom"></div>
        </div>
      </a>
      <a
        className="hex-link"
        target="_blank"
        href="https://frosty-joliot-176acd.netlify.app"
      >
        <div className="hexagon" id="interview-scheduler">
          <div className="hexTop"></div>
          <div className="hexBottom"></div>
        </div>
      </a>
      <a
        className="hex-link"
        target="_blank"
        href="https://mt-tinyurl.herokuapp.com"
      >
        <div className="hexagon" id="tinyapp">
          <div className="hexTop"></div>
          <div className="hexBottom"></div>
        </div>
      </a>
    </div>
  )
}
