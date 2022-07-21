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
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
`;


const { Title, Year, Plot, isModalOpen, setIsModalOpen, imdbID} = props;

const { theme } = useContext(ThemeContext);

const [movieDetails, setMovieDetails] = useState(null);

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    async function getMovieDetails() {
        setIsLoading(true);
        const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("Movie details: ", data.Actors);
        setIsLoading(false);
        setMovieDetails(data);
    }
    getMovieDetails();
}, [])

const handleClose = () => {
    setIsModalOpen(false);
    setMovieDetails(null);
}

return (
        <ReactModal isOpen={isModalOpen}>
            <ModalWrapper className={`App-${theme}`}>
                <div>{movieDetails.Actors}</div>
                <div>{Year}</div>
                <div>
                    {Plot}
                </div>
                <button type="button" onClick={handleClose}>Close</button>
            </ModalWrapper>
        </ReactModal>
    );
}