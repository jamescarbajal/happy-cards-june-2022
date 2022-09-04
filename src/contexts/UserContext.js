import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState(true);

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };