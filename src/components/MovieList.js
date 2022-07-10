import { useState } from "react";

export default function MovieList(props) {
    const [timespan, setTimespan] = useState();
    const [searchterm, searchTerm] = useState(["Halloween", "The Exorcist", "The Shining", "A Nightmare on Elm Street"]);
    const [loggedIn, setLoggedIn] = useState(true);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            {loggedIn && <div style={{ color: "red" }}>Logged in</div>}
            <div>MovieList</div>
            <button onClick={() => setTimespan("This Month")}>This Month</button>
            <button onClick={() => setTimespan("This Year")}>This Year</button>
            <div>{timespan} is selected.</div>
            {loading && <div style={{ color: "blue" }} >Searching for your movies...</div>}
            
            {searchterm.length > 0 ? (
                searchterm.map((Movie) => (
                    <div style={{ backgroundColor: "yellow" }}>
                        <div>{Movie}</div>
                    </div>
                ))
                ) : (
                <div>
                    <div>No movies found.</div>
                </div>
            )}

        </div>
    );
}