import { useState, useEffect } from "react";

export default function CardForm() {
    // const [recipientName, setRecipientName] = useState("");
    // const [recipientEmail, setRecipientEmail] = useState("");
    // const [selectedHolidayName, setSelectedHolidayName] = useState("");
    // const [senderName, setSenderName] = useState("");
    // const [senderEmail, setSenderEmail] = useState("");

    const [movieName, setMovieName] = useState("");
    const [movieList, setMovielist] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit() {
        console.log("Submitted!");
    }
    function makeUppercase(value) {
        return value.toUpperCase();
    }

    const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

    function handleSubmit(e) {
        e.preventDefault();
        async function getMoviesByName() {
            setIsLoading(true);
            const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${movieName}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log("data is: ", data.Search);
            setMovielist(data.Search);
            setIsLoading(false);
        }
        getMoviesByName();
    };

    return (
        <div><br></br>
            <form onSubmit={handleSubmit}>
                <label htmlFor="recipientName">Search by Movie Name </label>
                <input 
                    name="recipientName"
                    type="text"
                    value={movieName}
                    onChange={(event) => setMovieName(event.target.value)}
                />
                <button type="submit">Search</button>
            
            </form>
            <br></br>
            <span>Results:</span>
        <div>   
            {!isLoading ? (
                <div><br></br>
                {movieList.length > 0 ? (
                    movieList.map((Movie) => (
                        <div>{Movie.Title} <span style={{ color: "lightblue" }}>{Movie.Year}</span></div>
                    ))
                ) : (
                <div>No results found.</div>
                )
                }
                </div>
            ) : (
            <div style={{ color: "blue" }} >Searching for your movies...</div>
            )}
        </div>
        </div>
    );
}