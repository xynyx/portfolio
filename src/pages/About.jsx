import React from "react"

export default function About() {
  return (
    <div className="section--about">
      <p>About</p>
      <div className="about-container">
        <div className="about-section">
          {/* <img src="/028-coding.svg"></img> */}
          <img src="/robot.svg"></img>
          I'm a Toronto-based full stack developer with a zest for creating
          beautiful and functional user experiences, and a knack for writing
          clean, elegant, and efficient code.
        </div>
        <div className="about-section">
          <img src="/ai.svg"></img>
          As a former laboratory scientist in microbiology, professional
          flautist, and with a love for painting, I've got some pretty nifty,
          unique skills you might not find elsewhere!
        </div>
        <div className="about-section">
          <img src="/vr.svg"></img>
          Obsessed with all things Sci-Fi. Virtual Reality enthusiast. Paints
          miniature models. Outdoorsy and adventurous
        </div>
      </div>

      {/*
      

      I'm a Toronto-based full stack developer with a zest for creating beautiful and functional user experiences, and a knack for writing clean, elegant, and efficient code.

      As a former laboratory scientist in microbiology, professional flautist, and with a love for painting, I've got some pretty nifty, unique skills you might not find elsewhere!

      Obsessed with all things Sci-Fi. Virtual Reality enthusiast. Paints miniature models. Outdoorsy and adventurous. */}
    </div>
  )
}
