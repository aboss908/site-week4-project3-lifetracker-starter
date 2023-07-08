import "./ExerciseForm.css"
import {useState} from "react"
import { apiBaseURL, request, getExercises } from "../../utilities/apiClient"

export default function ExerciseForm(props) {
    const[form, setForm] = useState(
        {exercise_name: "", duration:0, intensity: 0})

    const handleChange = function(event) {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const handleSubmit = async function(event) {
        event.preventDefault()

        if (form.exercise_name === "" || form.duration === "") {
            alert("Form is not filled out completely")
        } else {
            if (isNaN(form.intensity) || isNaN(form.duration) || form.intensity > 10 || form.intensity < 0) {
                alert("Intensity must be an integer between 0 and 10")
            } else {
                const response = await request('POST', `${apiBaseURL}/tracker/exercise`, {
                    exercise_name: form.exercise_name,
                    duration: form.duration,
                    intensity: form.intensity
                })
    
                if (response) {
                    window.location.href = "/exercise"
                    await getExercises.then((list) => {
                        props.setExercises(list)
                    })
                }
            }
        }
    }
    
    return (
        <div>
            {props.isLoggedIn ? (
            <div className = "adding-form">
                <h1> New Exercise </h1>
                <form id = "exercise-form">
                    <p className = "titles">Exercise Name</p>

                    <input className = "exercise-inputs" 
                    type="text" 
                    value = {form.exercise_name} 
                    name = "exercise_name" 
                    onChange={handleChange}/>

                    <p className = "titles">Duration (minutes)</p>

                    <input className = "exercise-inputs" 
                    type="text" 
                    value = {form.duration == 0 ? "" : form.duration} 
                    name = "duration" 
                    onChange={handleChange}/>

                    <p className = "titles">Intensity</p>

                    <input className = "exercise-inputs" 
                    type="text" 
                    value = {form.intensity == 0 ? "" : form.intensity} 
                    name = "intensity" 
                    onChange={handleChange}/>

                    <br/>
                    <input id = "exercise-submit" type="submit" value="Log Exercise" onClick={handleSubmit}/>
                </form>
            </div>
            ) : (
                <h1 className = "restricted"> Log in to view the form. </h1>
            )}

        </div>
    )
}