import "./SleepForm.css"
import { useState } from "react"
import { apiBaseURL, request, getSleep } from "../../utilities/apiClient"

export default function SleepForm(props) {
    const[form, setForm] = useState(
        {sleep_date: "", start_time: "", end_time: "", total_time: 0})

    const handleChange = function(event) {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const handleSubmit = async function(event) {
        event.preventDefault()

        if (form.sleep_date === "" || form.start_time === "" || form.end_time === "") {
            alert("Form is not filled out completely")
        } else {
            if (isNaN(form.total_time)) {
                alert("Total time must be in number of hours")
            } else {
                const response = await request('POST', `${apiBaseURL}/tracker/sleep`, {
                    sleep_date: form.sleep_date,
                    start_time: form.start_time,
                    end_time: form.end_time,
                    total_time: form.total_time
                })
    
                if (response) {
                    window.location.href = "/sleep"
                    await getSleep.then((list) => {
                        props.setSleep(list)
                    })
                }
            }
        }
    }

    return (
        <div>
            {props.isLoggedIn ? (
                <div className = "sleep-adding-form">
                <h1> Sleep </h1>
                <form id = "sleep-form">
                    <p className = "titles">Sleep Date</p>

                    <input className = "sleep-inputs" 
                    type="text" 
                    value = {form.sleep_date} 
                    name = "sleep_date" 
                    onChange={handleChange}/>

                    <p className = "titles">Start Time</p>

                    <input className = "sleep-inputs" 
                    type="text" 
                    value = {form.start_time} 
                    name = "start_time" 
                    onChange={handleChange}/>

                    <p className = "titles">End Time</p>

                    <input className = "sleep-inputs" 
                    type="text" 
                    value = {form.end_time} 
                    name = "end_time" 
                    onChange={handleChange}/>

                    <p className = "titles">Total Time (hours) </p>

                    <input className = "sleep-inputs" 
                    type="text" 
                    value = {form.total_time == 0 ? "": form.total_time} 
                    name = "total_time" 
                    onChange={handleChange}/>

                    <br/>
                    <input id = "sleep-submit" type="submit" value="Log Sleep" onClick={handleSubmit}/>
                </form>
            </div>            
            ) : (
                <h1 className = "restricted"> Log in to view the form. </h1>
            )}
        </div>
    )
}