import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import { HeaderLink } from "./StyledComponents";

function styleByActiveStatus(isActive) {
    return isActive 
    ? {fontWeight: "bold", textDecoration: "none"} 
    : {fontWeight: "normal", textDecoration: "none"};
}

export default function AppHeader() {

    return (
    <div style={{ display: "flex", flexFlow: "row wrap" , justifyContent: "space-between", alignItems: "center" }}>
        <div className="HeaderText" style={{ marginTop: 10 }}>
            James' Movie Search
        </div>
            <NavLink to="/" style={({ isActive}) => styleByActiveStatus(isActive)}>
                <HeaderLink>Home</HeaderLink>
            </NavLink>
            <ThemeToggle />
    </div>
    );
}