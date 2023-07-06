import "./Card.css"

export default function Card(props) {
    return (
        <div className = "home-card">
            <p> {props.name} </p>
            <div>
                <img className = "home-image" src = {props.image}/>
            </div>
        </div>
    )
}