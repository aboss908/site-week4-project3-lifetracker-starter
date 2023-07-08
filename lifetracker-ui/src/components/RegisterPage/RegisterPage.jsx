import "./RegisterPage.css"
import userIcon from "../../assets/usericon.png"
import {useState} from "react"
import {Link} from "react-router-dom"
import {request, apiBaseURL, fixToken, apiRegisterURL, apiLogInURL} from "../../utilities/apiClient"
import {getExercises, getNutrition, getSleep} from "../../utilities/apiClient"

export default function RegisterPage(props) {
    const[form, setForm] = useState(
        {username: "", 
        firstname: "",
        lastname: "",
        email: "",
        password:"",
        confirmpass: ""})

    const handleChange = function(event) {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const handleSubmit = async function(event) {
        event.preventDefault()
        const normalized = form.email.toLowerCase()
        let response = null

        if (form.password === form.confirmpass) {
            response = await request('POST', `${apiBaseURL}${apiRegisterURL}`, {
                username: form.username,
                first_name: form.firstname,
                last_name: form.lastname,
                email: normalized,
                password: form.password 
            })
        }

        if (response) {
            const logInResponse = await request('POST', `${apiBaseURL}${apiLogInURL}`, {
                email: normalized,
                password: form.password,
            })

            if (logInResponse) {
                const token = fixToken(logInResponse.token)
                localStorage.setItem('lifetracker_token', token)
                window.location.href = "/activity"
                try {
                    await getExercises().then((list) => {
                        props.setExercises(list)
                    })
                    await getNutrition().then((list) => {
                        props.setNutritions(list)
                    })
                    await getSleep().then((list) => {
                        props.setSleep(list)
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        } else {
            alert("Please check that your email is valid, the form is filled up, or an account was already created with that email.")
        }
    }

    return (
        <div>
        {props.isLoggedIn ? ( 
            <h1 className = "restricted"> You're already logged in. </h1>
        ) : (
            <div className = "register-container">
                <form id="register">
                    <img id ="userIcon" src={userIcon} alt ="user-icon"/>

                    <h2> Register </h2>

                    <div className = "text-box">
                        <input id = "textbox" 
                        type = "text" 
                        placeholder="Username" 
                        name = "username" 
                        onChange={handleChange}/>
                    </div>

                    <div className = "separator">
                        <div className = "text-box2">
                            <input id = "textbox2" 
                            type = "text" 
                            placeholder="First Name" 
                            name = "firstname" 
                            onChange={handleChange}/>
                        </div>
                        <div className = "text-box2">
                            <input id = "textbox2" 
                            type = "text" 
                            placeholder="Last Name" 
                            name = "lastname" 
                            onChange={handleChange}/>
                        </div>
                    </div>

                    <div className = "text-box">
                        <input id = "textbox" 
                        type = "text" 
                        placeholder="Email" 
                        name = "email" 
                        onChange={handleChange}/>
                    </div>

                    <div className = "password text-box">
                        <input id = "textbox" 
                        type = "password" 
                        placeholder="Password" 
                        name = "password" 
                        onChange={handleChange}/>
                    </div>

                    <div className = "password">
                        <input id = "textbox" 
                        type = "password" 
                        placeholder="Confirm Password" 
                        name = "confirmpass" 
                        onChange={handleChange}/>
                    </div>

                    <p className = {form.password !== form.confirmpass ? "notmatching": "notmatching hidden"}> Passwords do not match </p>

                    <input id = "log-button" type="submit" value ="Create Account" onClick = {handleSubmit}/>
                    <hr className = "divider"/>
                    <p> Already have an account? <Link to = "/login"> Sign In </Link> </p>
                </form>
            </div>
        )}
        </div>
    )
}