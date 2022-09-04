import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import AppHeader from "./AppHeader";
import { MainContainer, FooterContainer } from "./StyledComponents";


export default function HeaderFooter() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
    <MainContainer className={`App-${theme}`}>
        <AppHeader />
        <Outlet />
        <FooterContainer>
            &copy; 2022 James Carbajal
        </FooterContainer>
    </MainContainer>
    );
}