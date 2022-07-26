import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import AppHeader from "./AppHeader";


export default function HeaderFooter() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
    <div className={`App-${theme}`}>
        <AppHeader />
        <div style={{ padding: 40 }}>
            <Outlet />
        </div>
        <div style={{ bottom: 10, left: 100 }}>
            &copy; 2022 James Carbajal
        </div>
    </div>
    );
}