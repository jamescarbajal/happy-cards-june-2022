import { useContext } from "react";
import CardForm from "./CardForm";
import { ClickableText } from "./StyledComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";


export default function Home() {

  const { theme } = useContext(ThemeContext);

    return (
        <div className={`App-${theme}`}>

          {/* <CardForm /> */}
          <div className="Home-CallToActionSection">
            <div className="HeaderText">What are you waiting for?

            <Link to="/CardForm">
              <ClickableText>Try it now!</ClickableText>
            </Link>
            
            </div>
          </div>

        </div>
    );
}