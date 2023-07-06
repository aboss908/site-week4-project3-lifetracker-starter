import "./NutritionPage.css"
import NutritionCard from "../NutritionCard/NutritionCard"

export default function NutritionPage() {
    return (
        <div className = "nutrition-page">                    
            <div className = "nutrition-hero">
                <h1> Nutrition </h1>
            </div>
            <button> Add a Meal </button>
            <div className = "nutrition-container">
                <NutritionCard
                time = "Today at 4:00 PM"
                logo = "A"
                title = "Apple"
                calories = "50"
                quantity = "1"/>
                <NutritionCard
                time = "Today at 9:30 PM"
                logo = "P"
                title = "Pizza"
                calories = "500"
                quantity = "3"/>
            </div>
        </div>
    )
}