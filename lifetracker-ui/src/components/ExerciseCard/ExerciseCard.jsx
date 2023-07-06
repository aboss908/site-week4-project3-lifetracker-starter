import "./ExerciseCard.css"

export default function ExerciseCard(props) {
    return (
        <div className = "exercise-card">
            <p id = "exercise-date"> {props.time} </p>
            <div className = "exercise-card-container">
                <div className = "exercise-title">
                    <div className = "logo"> {props.logo} </div>
                    <p> {props.title} </p>
                </div>
                <div className = "exercise-stats">
                    <div className = "duration">
                        <p> Duration </p>
                        <h3> {props.duration} </h3>
                    </div>
                    <div className = "intensity">
                        <p> Intensity </p>
                        <h3> {props.intensity}/10 </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}