import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import ModalCard from "./ModalCard";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"

const PosterImage = styled.img`
    height: auto;
    width: 300px;
`;

const CardWrapper = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
border: 1px solid gray;
box-shadow: 0px 4px 8px gray;
border-radius: 10px;
padding: 10px;
width: 300px;
height: auto;
min-height: 500px;
margin: 10px;
`;

const CardHeader = styled.div`
font-weight: 600;
margin-top: 10px;
`;

export default function MovieCard(props) {
    
    console.log("MovieCard props:", props);

    const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

    const { Poster, Title, Year, imdbID } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { theme } = useContext(ThemeContext);

    const [movieDetails, setMovieDetails] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const cardWrapperClicked = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        async function getMovieDetails() {
            setIsLoading(true);
            console.log("imdbID: ", imdbID);
            const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log("Movie Details: ", data);
            setMovieDetails(data);
            setIsLoading(false);
        }
    getMovieDetails();
    }

    return (
        <>
            <CardWrapper className={`App-${theme}`} onClick={cardWrapperClicked}>
                <PosterImage src={Poster}></PosterImage>
                <CardHeader>{Title}</CardHeader>
                <CardHeader>{Year}</CardHeader>
            </CardWrapper>

            <ModalCard Poster={Poster} Title={Title} Year={Year} movieDetails={movieDetails} setMovieDetails={setMovieDetails} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isLoading={isLoading} setIsLoading={setIsLoading} />
        </>
    )
}