import "./FeedTiles.css"

export default function FeedTiles(props) {
    return (
        <div className = {props.type}> 
            <div className = "feed-tile">
                <div className = "feed-title">
                    {props.title}
                </div>
                <div className = "feed-info">
                    {props.activity}
                </div>
            </div>    
        </div>
    )
}