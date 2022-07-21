import ReactModal from "react-modal";
import { useState, useContext } from "react";
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


const { Poster, Title, Year, Plot, isModalOpen, setIsModalOpen } = props;

const { theme } = useContext(ThemeContext);

return (
        <ReactModal isOpen={isModalOpen}>
            <ModalWrapper className={`App-${theme}`}>
                <div>{Title}</div>
                <div>{Year}</div>
                <div>
                    {Plot}
                </div>
                <button type="button" onClick={() => setIsModalOpen(false)}>Close</button>
            </ModalWrapper>
        </ReactModal>
    );
}