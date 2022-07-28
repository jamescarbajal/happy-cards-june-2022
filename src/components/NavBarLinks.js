import { NavLink } from "react-router-dom";
import { HeaderLink } from "./StyledComponents";

export default function NavBarLinks(props) {

    function styleByActiveStatus(isActive) {
        return isActive 
        ? {fontWeight: "bold", textDecoration: "none"} 
        : {fontWeight: "normal", textDecoration: "none"};
    }

    return (
    <>
        <NavLink to="/" style={({ isActive}) => styleByActiveStatus(isActive)}>
            <HeaderLink path="/">Home</HeaderLink>
        </NavLink>
        <NavLink to="/Login" style={({ isActive}) => styleByActiveStatus(isActive)}>
            <HeaderLink path="/Login">Login</HeaderLink>
        </NavLink>
        <NavLink to="/CardForm" style={({ isActive}) => styleByActiveStatus(isActive)}>
            <HeaderLink path="/CardForm">Card Form</HeaderLink>
        </NavLink>
    </>
    );
}