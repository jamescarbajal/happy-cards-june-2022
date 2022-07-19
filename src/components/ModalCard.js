import ReactModal from "react-modal";

export default function ModalCard(props) {

const { Poster, Title, Year, isModalOpen, setIsModalOpen } = props;

return (
        <ReactModal isOpen={isModalOpen}>
            <div><img src={Poster}></img></div>
            <button type="button" onClick={() => setIsModalOpen(false)}>Close</button>
        </ReactModal>
    );
}