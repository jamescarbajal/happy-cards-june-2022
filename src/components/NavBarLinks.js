import { NavLink } from "react-router-dom";
import { HeaderLink } from "./StyledComponents";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function NavBarLinks(props) {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    function styleByActiveStatus(isActive) {
        return isActive 
        ? {fontWeight: "bold", textDecoration: "none"} 
        : {fontWeight: "normal", textDecoration: "none"};
    }
    

    return (
    <>
        <NavLink to="/" style={({ isActive }) => styleByActiveStatus(isActive)}>
            <HeaderLink path="/">Home</HeaderLink>
        </NavLink>
        <NavLink to="/CardForm" style={({ isActive}) => styleByActiveStatus(isActive)}>
            <HeaderLink path="/CardForm">Card Form</HeaderLink>
        </NavLink>

        {!loggedInUser ? (
        <NavLink to="/Cardform" style={({ isActive }) => styleByActiveStatus(isActive)}>
            <HeaderLink path="/Cardform">Login</HeaderLink>
        </NavLink>
        ) : (
            <NavLink to="/Login" style={({ isActive }) => styleByActiveStatus(isActive)}>
                <HeaderLink onClick={() => setLoggedInUser(null)} path="/Login">Logout</HeaderLink>
            </NavLink>
        )}
    </>
    );
}