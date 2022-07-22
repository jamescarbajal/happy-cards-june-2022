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
    max-height: fit-content;
    max-width: fit-content;
    text-align: justify;
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
                    <div>{Plot}</div>
                    <button type="button" onClick={handleClose}>Close</button>
                </>
                ) : (
                    <div>Loading content...</div>
                )

                }
            </ModalWrapper>
        </ReactModal>
    );
}