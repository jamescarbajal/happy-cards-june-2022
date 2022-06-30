export default function MovieCard(props) {
    console.log(props);
    return (
        <div className="HighlightCard">
            <img style={{ width: 300, height: "auto"}} src={props.posterImage}></img>
            <div style={{fontWeight:"600", marginTop: 10, marginBottom: 10}}>{props.title}</div>
            <div>Rated: {props.rating}</div>
        </div>
    )
}