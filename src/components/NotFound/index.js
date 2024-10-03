// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const headingTheme = isDarkTheme ? 'dark-theme' : 'light-theme'

      const pageClassName = isDarkTheme ? 'bg-dark-theme' : 'bg-light-theme'

      return (
        <div className={`notfound-page-container ${pageClassName}`}>
          <Navbar />
          <div className="notfound-container">
            <img
              className="not-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`heading ${headingTheme}`}>Lost Your Way?</h1>
            <p className={`para ${headingTheme}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
