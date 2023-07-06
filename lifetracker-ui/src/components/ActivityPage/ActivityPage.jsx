import "./ActivityPage.css"
import FeedTiles from "../FeedTiles/FeedTiles.jsx"

export default function ActivityPage() {
    return (
        <div className = "activity-page">
            <div className = "activity-container">
                <h1> Activity Feed </h1>
                <div className = "top-info">
                    <button className = "button add-exercise"> Add Exercise </button>
                    <button className = "button record-nutrition"> Record Nutrition </button>
                    <button className = "button log-sleep"> Log Sleep </button>
                </div>
            </div>
            <div className = "tiles-container">
                <FeedTiles title = "Total Exercise Minutes" info = "83.0" type = "tile exercise"/>
                <FeedTiles title = "Average Hours of Sleep" info = "8.0" type = "tile sleep"/>
                <FeedTiles title = "Average Daily Calories" info = "1250.0" type = "tile nutrition"/>
            </div>
        </div>
    )
}