import "./NutritionPage.css"
import NutritionCard from "../NutritionCard/NutritionCard"
import { Link } from "react-router-dom"

export default function NutritionPage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <div className = "nutrition-page">                    
                <div className = "nutrition-hero">
                    <h1> Nutrition </h1>
                </div>
                <Link to ="/nutrition/form"> <button>Add an Meal</button> </Link>
                <div className = "nutrition-container">
                    {props.nutritions.map((element, index) => {
                        let date = element.date.split("T")
                        return <NutritionCard
                        key = {element + index}
                        time = {date[0] + " at " + date[1].substring(0,date[1].length-5)} 
                        logo = {element.food_name.charAt(0).toUpperCase()}
                        title = {element.food_name}
                        calories = {element.calories}
                        quantity = {element.quantity}/>   
                    })}
                </div>
            </div>
            ) : (
                <h1 className = "restricted"> Log in to view your data. </h1>
            )}
        </div>
    )
}