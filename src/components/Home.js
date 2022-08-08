import { useContext } from "react";
import { ClickableText, MainContainer } from "./StyledComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { HomeContainer } from "./StyledComponents";


export default function Home() {


  const { theme } = useContext(ThemeContext);

    return (
        <HomeContainer className={`App-${theme}`}>
          <div className="Home-CallToActionSection">
            <div className="HeaderText">What are you waiting for?
              <Link to="/CardForm">
                <ClickableText>Try it now!</ClickableText>
              </Link>
            </div>
          </div>
        </HomeContainer>
    );
}