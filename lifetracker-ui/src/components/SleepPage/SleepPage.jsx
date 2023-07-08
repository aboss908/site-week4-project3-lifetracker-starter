import "./SleepPage.css"
import SleepCard from "../SleepCard/SleepCard"
import { Link } from "react-router-dom"

export default function SleepPage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <div className = "sleep-page">
                <div className = "sleep-hero">
                    <h1> Sleep </h1>
                </div>
                <Link to ="/sleep/form"> <button>Add Sleep</button> </Link>
                {props.sleep.map((element, index) => {
                    return <SleepCard
                    key = {element + index}
                    logo = {element.id}
                    title = {element.sleep_date}
                    start = {element.start_time}
                    end = {element.end_time}
                    />
                })}
            </div>
            ) : (
                <h1 className = "restricted"> Log in to view your data. </h1>
            )}
        </div>
    )
}