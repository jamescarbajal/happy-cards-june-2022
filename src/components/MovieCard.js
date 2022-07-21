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
    
    console.log(props);

    const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

    const { Poster, Title, Year, imdbID } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [moviePlot, setMoviePlot] = useState("")

    const [isLoading, setIsLoading] = useState(false);

    const { theme } = useContext(ThemeContext);



    return (
        <>
            <CardWrapper className={`App-${theme}`} onClick={() => setIsModalOpen(true).then.cardWrapperClick()}>
                <PosterImage src={Poster}></PosterImage>
                <CardHeader>{Title}</CardHeader>
                <CardHeader>Year: {Year}</CardHeader>
            </CardWrapper>
            <ModalCard Poster={Poster} Title={Title} Year={Year} imdbID={imdbID} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    )
}