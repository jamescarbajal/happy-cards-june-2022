import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import ReactModal from "react-modal";
import { ThemeContext } from "../contexts/ThemeContext";

export default function CardForm() {
    // const [recipientName, setRecipientName] = useState("");
    // const [recipientEmail, setRecipientEmail] = useState("");
    // const [selectedHolidayName, setSelectedHolidayName] = useState("");
    // const [senderName, setSenderName] = useState("");
    // const [senderEmail, setSenderEmail] = useState("");

    const [movieName, setMovieName] = useState("");
    const [movieList, setMovielist] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { toggleTheme } = useContext(ThemeContext);

    const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

    const handleSubmit = (e) => {
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

const MainContainer = styled.div`
    min-height: 100vh;
`;

const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid gray;
`;

const MiniHeader = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const { theme } = useContext(ThemeContext);

    return (
    <>
        <div className={`App-${theme}`}>
            <br></br>
            <div>
                <form onSubmit={handleSubmit}>

                    <MiniHeader>Search by Movie Name </MiniHeader>
                    <input 
                        name="searchBox"
                        type="text"
                        value={movieName}
                        onChange={(event) => setMovieName(event.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            <br></br>
            <MiniHeader>Results:</MiniHeader>
            <div>
                {!isLoading ? (
                    <CardContainer className={`App-${theme}`}>

                    {movieList.length > 0 ? (
                        movieList.map((Movie) => (
                            <MovieCard Poster={Movie.Poster} Title={Movie.Title} Year={Movie.Year} imdbID={Movie.imdbID}/>
                        ))
                    ) : (
                    <MiniHeader className={`App-${theme}`}>No results found.</MiniHeader>
                    )
                    }
                    </CardContainer>
                ) : (
                <MiniHeader className={`App-${theme}`} style={{ color: "blue" }} >Searching for your movies...</MiniHeader>
                )}
            </div>
        </div>
    </>
    );
}