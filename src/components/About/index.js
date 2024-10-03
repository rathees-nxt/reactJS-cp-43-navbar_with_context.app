// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const headingTheme = isDarkTheme ? 'dark-theme' : 'light-theme'

      const pageClassName = isDarkTheme ? 'bg-dark-theme' : 'bg-light-theme'

      return (
        <div className={`about-page-container ${pageClassName}`}>
          <Navbar />
          <div className="about-container">
            <img className="about-image" src={aboutImageUrl} alt="about" />
            <h1 className={`heading ${headingTheme}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
