import "./SleepCard.css"

export default function SleepCard(props) {
    return (
        <div className = "sleep-card">
            <div className = "sleep-card-container">
                <div className = "sleep-title">
                    <div className = "sleep-logo"> {props.logo} </div>
                    <p> {props.title} </p>
                </div>
                <div className = "sleep-stats">
                    <div className = "start">
                        <p> Start Time </p>
                        <h3> {props.start} </h3>
                    </div>
                    <div className = "end">
                        <p> End Time </p>
                        <h3> {props.end} </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}