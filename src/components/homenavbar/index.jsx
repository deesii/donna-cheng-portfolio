import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import ProjectNavBar from "../MiniProjectsNavBar"
import AboutMe from "../aboutme"
import Who from '../goodbye'
import CountComponent from '../count'
import Board from '../tictactoe/board'
import CvProjects from "../CvProjectsNavBar"
import BlueberriesBnb from "../BlueberriesBnb"
import Portfolio from "../Portfolio"

export default function HomeNavBar (){
    return(
        <div>
            <p></p>
            <ul>
                <li className = "hover:text-2xl"><Link to="/aboutme">about me</Link></li>
                <li className= "hover:text-2xl"><Link to="/cv-pjts">cv projects</Link></li>
                <li className= "hover:text-2xl"><Link to="/mini-pjts">mini projects</Link></li>

            </ul>
            <Routes>
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/cv-pjts" element={<CvProjects/>} />
                <Route path="/mini-pjts" element={<ProjectNavBar />} />
                <Route path="/mini-pjts/tictactoe" element={<Board />} />
                <Route path="/mini-pjts/counthowhigh" element={<CountComponent />} />
                <Route path="/mini-pjts/goodbyes" element={<Who />} />
                <Route path="/cv-pjts/blueberriesbnb" element={<BlueberriesBnb/>} />
                <Route path="cv-pjts/portfolio" element={<Portfolio/>} />
            </Routes>
        </div>
    )
}