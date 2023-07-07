import "./ExercisePage.css"
import ExerciseCard from "../ExerciseCard/ExerciseCard"

export default function ExercisePage(props) {
    return (
        <div>
            {props.isLoggedIn ? ( 
                <div className = "exercise-page">
                    <div className = "exercise-hero">
                        <h1> Exercise </h1>
                    </div>
                    <button> Add an Exercise </button>
                    <div className="exercise-container">
                        {props.exercises.map((element, index) => {
                            return <ExerciseCard
                            key = {element + index}
                            time = {element.date.substring(0,10) + "  (" + element.date.substring(12, 16) + ")"} 
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