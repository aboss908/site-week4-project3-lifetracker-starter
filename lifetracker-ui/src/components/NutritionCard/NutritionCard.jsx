import "./NutritionCard.css"

export default function NutritionCard(props) {
    return (
        <div className = "nutrition-card">
        <p id = "nutrition-date"> {props.time} </p>
        <div className = "nutrition-card-container">
            <div className = "nutrition-title">
                <div className = "logo"> {props.logo} </div>
                <p> {props.title} </p>
            </div>
            <div className = "nutrition-stats">
                <div className = "calories">
                    <p> Calories </p>
                    <h3> {props.calories} </h3>
                </div>
                <div className = "quantity">
                    <p> Quantity </p>
                    <h3> {props.quantity} </h3>
                </div>
            </div>
        </div>
        </div>
    )
}