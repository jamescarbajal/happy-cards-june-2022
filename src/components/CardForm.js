import { useState } from "react";

export default function CardForm() {
    const [recipientName, setRecipientName] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("");
    const [selectedHolidayName, setSelectedHolidayName] = useState("");
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");

    function handleSubmit() {
        console.log("Submitted!");
    }
    function makeUppercase(value) {
        return value.toUpperCase();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="recipientName">Their Name </label>
                <input 
                    name="recipientName"
                    type="text"
                    value={makeUppercase(recipientName)}
                    onChange={(event) => setRecipientName(event.target.value)}
                />
            </form>
            <br></br>
            <span>{recipientName}</span>
        </div>
    );
}