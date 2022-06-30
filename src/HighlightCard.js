export default function HighlightCard(props) {
    console.log(props);
    return (
        <div className="HighlightCard">
            <div>img here</div>
            <div>{props.header}}</div>
            <div>Description</div>
        </div>
    )
}