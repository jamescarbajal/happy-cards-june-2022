import ReactModal from "react-modal";
import { useState } from "react";
import { ThemeConsumer } from "styled-components";

export default function ModalCard(props) {



const { Poster, Title, Year, Plot, isModalOpen, setIsModalOpen } = props;


return (
        <ReactModal isOpen={isModalOpen}>
            <div><img src={Poster}></img></div>
            <div>{Year}</div>
            <div>
                {Plot}
            </div>
            <button type="button" onClick={() => setIsModalOpen(false)}>Close</button>
        </ReactModal>
    );
}