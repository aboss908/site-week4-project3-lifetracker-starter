import "./SleepPage.css"
import SleepCard from "../SleepCard/SleepCard"

export default function SleepPage() {
    return (
        <div className = "sleep-page">
            <div className = "sleep-hero">
                <h1> Sleep </h1>
            </div>
            <button> Add Sleep </button>
            <SleepCard
            logo = "1"
            title = "July 1st, 2023"
            start = "12:04 AM"
            end = "11:39 PM"
            />
            <SleepCard
            logo = "1"
            title = "July 1st, 2023"
            start = "2:04 AM"
            end = "8:39 AM"
            />
            <SleepCard
            logo = "1"
            title = "July 1st, 2023"
            start = "2:04 AM"
            end = "8:39 AM"
            />
            <SleepCard
            logo = "1"
            title = "July 1st, 2023"
            start = "2:04 AM"
            end = "8:39 AM"
            />
        </div>
    )
}