// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const bgClassName = isDarkTheme ? 'bg-dark' : 'bg-light'

      const bgThemeClassName = isDarkTheme ? 'bg-dark-theme' : 'bg-light-theme'

      return (
        <div className={`navbar-page-container ${bgClassName}`}>
          <div className="navbar-container">
            <img className="nav-image" src={logoUrl} alt="website logo" />
            <ul className="nav-menu-list">
              <li className="menu-item">
                <Link to="/" className={`nav-link ${bgThemeClassName}`}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/about" className={`nav-link ${bgThemeClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              type="button"
              className="theme-button"
              onClick={onClickTheme}
            >
              <img className="theme-img" src={themeImageUrl} alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
