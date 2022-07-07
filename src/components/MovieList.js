import { useState } from "react";

export default function MovieList() {
    const [timespan, setTimespan] = useState("Nothing!");
    return (
        <div>
            <div>MovieList</div>
            <button onClick={() => setTimespan("This Month")}>This Month</button>
            <button onClick={() => setTimespan("This Year")}>This Year</button>
            <div>{timespan} is selected.</div>
        </div>
    );
}