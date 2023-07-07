import "./NutritionPage.css"
import NutritionCard from "../NutritionCard/NutritionCard"

export default function NutritionPage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <div className = "nutrition-page">                    
                <div className = "nutrition-hero">
                    <h1> Nutrition </h1>
                </div>
                <button> Add a Meal </button>
                <div className = "nutrition-container">
                    {props.nutritions.map((element, index) => {
                        return <NutritionCard
                        key = {element + index}
                        time = {element.date.substring(0,10) + "  (" + element.date.substring(12, 16) + ")"}
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