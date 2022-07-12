import { useState, useEffect } from "react";

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export default function MovieList(props) {
    const [timespan, setTimespan] = useState();
    const [searchmovie, setSearchMovie] = useState([]);
    const [loggedIn, setLoggedIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getMoviesByName() {
            setIsLoading(true);
            const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=The+Avengers`;
            const response = await fetch(url);
            const data = await response.json();
            console.log("data is: ", data.Search);
            setSearchMovie(data.Search);
            setIsLoading(false);
        }
        getMoviesByName();
    }, [])

    return (
        <div>
            {loggedIn && <div style={{ color: "red" }}>Logged in</div>}
            <div>MovieList</div>
            <button onClick={() => setTimespan("This Month")}>This Month</button>
            <button onClick={() => setTimespan("This Year")}>This Year</button>
            <div>{timespan} is selected.</div>
            {!isLoading ? (
            <div>
            {searchmovie.length > 0 ? (
                searchmovie.map((Movie) => (
                    <div style={{ backgroundColor: "yellow" }}>
                        <div>{Movie.Title}</div>
                    </div>
                ))
                ) : (
                <div>
                    <div>No movies found.</div>
                </div>
            )}
            </div>
            ) : (
                <div style={{ color: "blue" }} >Searching for your movies...</div>
            )}
        </div>
    );
}