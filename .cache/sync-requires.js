const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/src/pages/About.jsx"))),
  "component---src-pages-contact-jsx": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/src/pages/Contact.jsx"))),
  "component---src-pages-footer-jsx": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/src/pages/Footer.jsx"))),
  "component---src-pages-header-jsx": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/src/pages/Header.jsx"))),
  "component---src-pages-hexagon-grid-jsx": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/src/pages/HexagonGrid.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/src/pages/index.jsx"))),
  "component---src-pages-navbar-jsx": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/src/pages/Navbar.jsx"))),
  "component---src-pages-projects-jsx": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/src/pages/Projects.jsx"))),
  "component---src-pages-sections-jsx": hot(preferDefault(require("/home/xynyx/lighthouse/portfolio/src/pages/Sections.jsx")))
}

