import "./NutritionForm.css"
import { useState } from "react"
import { apiBaseURL, request, getNutrition } from "../../utilities/apiClient"

export default function NutritionForm(props) {
    const[form, setForm] = useState(
        {food_name: "", calories:0, quantity: 0})

    const handleChange = function(event) {
        setForm({...form, [event.target.name]:event.target.value})
    }

    const handleSubmit = async function(event) {
        event.preventDefault()

        if (form.food_name === "") {
            alert("Form is not filled out completely")
        } else {
            if (isNaN(form.calories) || isNaN(form.quantity)) {
                alert("Calories and quantity must be integers")
            } else {
                const response = await request('POST', `${apiBaseURL}/tracker/nutrition`, {
                    food_name: form.food_name,
                    calories: form.calories,
                    quantity: form.quantity
                })
    
                if (response) {
                    window.location.href = "/nutrition"
                    await getNutrition.then((list) => {
                        props.setNutritions(list)
                    })
                }
            }
        }
    }
    
    return (
        <div>
            {props.isLoggedIn ? (            
            <div className = "adding-form">
                <h1> New Nutrition </h1>
                <form id = "nutrition-form">
                    <p className = "titles">Food Name</p>

                    <input className = "nutrition-inputs" 
                    type="text" 
                    value = {form.food_name} 
                    name = "food_name" 
                    onChange={handleChange}/>

                    <p className = "titles">Calories</p>

                    <input className = "nutrition-inputs" 
                    type="text" 
                    value = {form.calories == 0 ? "" : form.calories} 
                    name = "calories" 
                    onChange={handleChange}/>

                    <p className = "titles">Quantity</p>

                    <input className = "nutrition-inputs" 
                    type="text" 
                    value = {form.quantity == 0 ? "" : form.quantity} 
                    name = "quantity" 
                    onChange={handleChange}/>

                    <br/>
                    <input id = "nutrition-submit" type="submit" value="Log Nutrition" onClick={handleSubmit}/>
                </form>
            </div>               
            ) : (
                <h1 className = "restricted"> Log in to view the form. </h1>
            )}
        </div>
    )
}