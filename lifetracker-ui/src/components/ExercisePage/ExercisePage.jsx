import "./ExercisePage.css"
import ExerciseCard from "../ExerciseCard/ExerciseCard"

export default function ExercisePage() {
    return (
        <div className = "exercise-page">
            <div className = "exercise-hero">
                <h1> Exercise </h1>
            </div>
            <button> Add an Exercise </button>
            <div className="exercise-container">
                <ExerciseCard
                time = "Today at 9:20 PM" 
                logo = "S" 
                title = "Soccer" 
                duration = "15" 
                intensity = "9"/>
                <ExerciseCard
                time = "Today at 8:34 PM" 
                logo = "R" 
                title = "Running" 
                duration = "30" 
                intensity = "10"/>
                <ExerciseCard
                time = "Today at 3:18 PM" 
                logo = "F" 
                title = "Football" 
                duration = "120" 
                intensity = "8.5"/>
                <ExerciseCard
                time = "Today at 4:13 AM" 
                logo = "S" 
                title = "Swimming" 
                duration = "45" 
                intensity = "10"/>
            </div>
        </div>
    )
}