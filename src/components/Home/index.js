// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const headingTheme = isDarkTheme ? 'dark-theme' : 'light-theme'

      const pageClassName = isDarkTheme ? 'bg-dark-theme' : 'bg-light-theme'

      return (
        <div className={`home-page-container ${pageClassName}`}>
          <Navbar />
          <div className="home-container">
            <img className="home-image" src={homeImageUrl} alt="home" />
            <h1 className={`heading ${headingTheme}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
