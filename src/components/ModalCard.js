import ReactModal from "react-modal";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ModalCard(props) {

const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: justify;
`;

const PlotContainer = styled.p`
    max-width: 400px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 5%;
    right: 5%;
`;

const { Title, Poster, Year, isModalOpen, setIsModalOpen, movieDetails, setMovieDetails, isLoading, setIsLoading} = props;

const { theme } = useContext(ThemeContext);

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const { Plot, Actors, Rated } = movieDetails;

const handleClose = () => {
    setIsModalOpen(false);
    setMovieDetails({});
}

return (
        <ReactModal isOpen={isModalOpen}>
            <ModalWrapper className={`App-${theme}`}>
                {!isLoading ? (
                <>
                    <div><img src={Poster}></img></div>
                    <div>{Title}</div>
                    <div>{Year}</div>
                    <PlotContainer>{Plot}</PlotContainer>
                    <CloseButton type="button" onClick={handleClose}>Close</CloseButton>
                </>
                ) : (
                    <div>Loading content...</div>
                )

                }
            </ModalWrapper>
        </ReactModal>
    );
}