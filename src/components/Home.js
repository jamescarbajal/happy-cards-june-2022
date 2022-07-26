import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useState, useContext } from "react";
import CardForm from "./CardForm";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";


export default function Home() {

  const { theme } = useContext(ThemeContext);

    return (
        <div className={`App-${theme}`}>

          <CardForm />
          <div className="Home-CallToActionSection">
            <div className="HeaderText">What are you waiting for? Try it NOW!</div>
          </div>

        </div>
    );
}