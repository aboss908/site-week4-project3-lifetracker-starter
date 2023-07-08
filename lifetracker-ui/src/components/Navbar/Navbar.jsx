import "./Navbar.css"
import logo from "../../assets/codepath.svg"
import {Link} from "react-router-dom"

export default function Navbar(props) {
    const handleLogOut = function() {
        localStorage.setItem("lifetracker_token", null)
        props.reset()
        window.location.href = "/"
    }

    return (
        <div className = "navbar">
            <div className = "navbar-container">
                <Link to="/">
                    <img src={logo}/>
                </Link>
                <NavbarLink link = "activity" name = "Activity"/>
                <NavbarLink link = "exercise" name = "Exercise"/>
                <NavbarLink link = "nutrition" name = "Nutrition"/>
                <NavbarLink link = "sleep" name = "Sleep"/>
                {props.isLoggedIn ? (
                    <div className = "log-buttons">
                        <button className = "sign-in btn" onClick = {handleLogOut}> Log Out </button> 
                    </div>
                ) : (
                    <div className = "log-buttons">
                        <Link to = "/login"> <p className = "sign-in btn"> Sign In </p> </Link>
                        <Link to = "/register"> <p className = "register btn"> Register </p> </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

const NavbarLink = (props) => {
    return (
        <Link className = "navbar-link" to={`/${props.link}`}> {props.name} </Link>
    )
}