import "./ExercisePage.css"
import ExerciseCard from "../ExerciseCard/ExerciseCard"
import { Link } from "react-router-dom"

export default function ExercisePage(props) {
    return (
        <div>
            {props.isLoggedIn ? ( 
                <div className = "exercise-page">
                    <div className = "exercise-hero">
                        <h1> Exercise </h1>
                    </div>
                    <Link to ="/exercise/form"> <button>Add an Exercise </button> </Link>
                    <div className="exercise-container">
                        {props.exercises.map((element, index) => {
                            let date = element.date.split("T")
                            return <ExerciseCard
                            key = {element + index}
                            time = {date[0] + " at " + date[1].substring(0,date[1].length-5)} 
                            logo = {element.exercise_name.charAt(0).toUpperCase()}
                            title = {element.exercise_name} 
                            duration = {element.duration} 
                            intensity = {element.intensity}/>
                        })}
                    </div>
                </div>
            ) : (
                <h1 className = "restricted"> Log in to view your data. </h1>
            )}
        </div>
    )
}