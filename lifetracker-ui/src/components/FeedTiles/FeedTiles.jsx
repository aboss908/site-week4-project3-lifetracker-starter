import "./FeedTiles.css"
import PropTypes from "react"

export default function FeedTiles(props) {
    return (
        <div className = {props.type}> 
            <div className = "feed-tile">
                <div className = "feed-title">
                    {props.title}
                </div>
                <div className = "feed-info">
                    {props.info}
                </div>
            </div>    
        </div>
    )
}