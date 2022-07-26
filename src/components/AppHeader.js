import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import { HeaderLink } from "./StyledComponents";

export default function AppHeader() {

    return (
    <div style={{ display: "flex", flexFlow: "row wrap" , justifyContent: "space-between", alignItems: "center" }}>
        <div className="HeaderText" style={{ marginTop: 10 }}>
            James' Movie Search
        </div>
            <NavLink to="/" style={{ textDecoration: "none" }} >
                <HeaderLink>Home</HeaderLink>
            </NavLink>
            <ThemeToggle />
    </div>
    );
}