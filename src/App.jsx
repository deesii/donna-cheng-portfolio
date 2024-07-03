import './App.css'
import { Link } from "react-router-dom"
import linkedinLogo from './assets/linkedin.svg'
import githubLogo from './assets/github.svg'
import HomeNavBar from './components/homenavbar'
import Nav from './components/nav'

function App() {

  return (
    <>
      <Link to="/">
        <p>
          <h1 className="hover:text-6xl text-5xl font-bold">
            Donna Cheng
            </h1>
        </p>
        <Nav />
        <p className= "hover:text-2xl">
          /deesii
        </p>
      </Link>
      <div className = "contact-row">
        <a className = "contact-link" href="https://www.linkedin.com/in/donna-cheng-deesii/" rel="nofollow noreferrer">
          <img src={ linkedinLogo } alt="LinkedIn Image" />
        </a>
        <a className = "contact-link" href="https://github.com/deesii" rel="nofollow noreferrer">
          <img src={githubLogo} alt="GitHub Image" />
        </a>
      </div>  
      <HomeNavBar />



    </>
  )
}

export default App
