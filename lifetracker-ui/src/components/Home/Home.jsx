import "./Home.css"
import image from "../../assets/tracker.jpg"
import Card from "../Card/Card.jsx"
import food from "../../assets/food.jpg"
import rest from "../../assets/alarm.jpg"
import bikepath from "../../assets/bikepath.jpg"
import calendar from "../../assets/calendar.jpg"

export default function Home() {
    return (
        <div>
            <div className = "home">
                <div className = "hero-container">
                    <div className = "home-left">
                        <h1 className = "home-title"> LifeTracker </h1>
                        <p className = "home-text"> Helping you take back control of your world. </p>
                    </div>
                    <div className = "home-right">
                        <img id="tracker-image" src = {image} alt = "Tracker"/>
                    </div>
                </div>
            </div>
            <div className = "card-container">
                <Card name = "Food" image = {food}/>
                <Card name = "Planner" image = {calendar}/>
                <Card name = "Fitness" image = {bikepath}/>
                <Card name = "Rest" image = {rest}/>
            </div>
        </div>
    )
}