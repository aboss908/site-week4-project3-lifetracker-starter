import "./ActivityPage.css"
import FeedTiles from "../FeedTiles/FeedTiles.jsx"
import {Link} from "react-router-dom"
import {useEffect} from "react"

export default function ActivityPage(props) {

    return (
        <div className = "activity-page">
        {props.isLoggedIn ? (
        <div>
            <div className = "activity-container">
                <h1> Activity Feed </h1>
                <div className = "top-info">
                    <Link to = "/exercise"><button className=" button add-exercise"> Add Exercise </button></Link>
                    <Link to = "/nutrition"><button className = "button record-nutrition"> Record Nutrition </button></Link>
                    <Link to="/sleep"><button className = "button log-sleep"> Log Sleep </button></Link>
                </div>
            </div>
            <div className = "tiles-container">
                <FeedTiles title = "Total Exercise Minutes" info = "83.0" type = "tile exercise"/>
                <FeedTiles title = "Most Hours of Sleep" info = "11.0" type = "tile sleep"/>
                <FeedTiles title = "Average Calories Per Meal" info = "362.0" type = "tile nutrition"/>
            </div>
        </div>
        ) : (
            <h1 className = "activity-restrict"> Log in to view your data. </h1>
        )}
        </div>
    )
}