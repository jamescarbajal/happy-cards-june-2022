import ThemeToggle from "./ThemeToggle";
import NavBarLinks from "./NavBarLinks";
import { HeaderContainer } from "./StyledComponents";

function styleByActiveStatus(isActive) {
    return isActive 
    ? {fontWeight: "bold", textDecoration: "none"} 
    : {fontWeight: "normal", textDecoration: "none"};
}

export default function AppHeader() {

    return (
        <>
            <HeaderContainer>
                <div>James' Movie Search</div>
                <NavBarLinks  />
                <ThemeToggle />
            </HeaderContainer>
        </>
    );
}