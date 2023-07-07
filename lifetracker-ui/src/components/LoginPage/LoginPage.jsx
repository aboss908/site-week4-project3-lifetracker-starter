import "./LoginPage.css"
import userIcon from "../../assets/usericon.png"
import {useState} from "react"
import {request, apiBaseURL, apiLogInURL, fixToken} from "../../utilities/apiClient"

export default function LoginPage(props) {
    const[form, setForm] = useState(
        {email: "", password:"",})

    const handleChange = function(event) {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const handleSubmit = async function (event) {
        event.preventDefault()
        const response = await request('POST', `${apiBaseURL}${apiLogInURL}`, {
            email: form.email,
            password: form.password
        })

        if (response) {
            const token = fixToken(response.token)
            localStorage.setItem("lifetracker_token", token)
            window.location.href = "/activity"
        } else {
            alert("Invalid credentials.")
        }
    }

    return (
        <div>
        {props.isLoggedIn ? (
            <h1 className = "restricted"> You're already logged in. </h1>
        ) : (
            <div className = "login-container">
                <form id="login">
                    <img id ="userIcon" src={userIcon} alt ="user-icon"/>
                    <h2> Sign In </h2>
                    <div className = "email">
                        <input id = "textbox" type = "text" placeholder="Email" name = "email" onChange={handleChange}/>
                    </div>
                    <div className = "password">
                        <input id = "textbox" type = "password" placeholder="Password" name ="password" onChange={handleChange}/>
                    </div>
                    <input id = "log-button" type="submit" value ="Log In" onClick={handleSubmit}/>
                </form>
            </div>
         )}
        </div>
    )
}