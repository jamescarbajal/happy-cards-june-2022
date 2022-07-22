import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import { useState, useContext } from "react";
import CardForm from "./components/CardForm";
import { ThemeContext } from "./contexts/ThemeContext";


export default function Home() {

  const { theme } = useContext(ThemeContext);

    return (
        <div className={`App-${theme}`}>
          <CardForm />
        </div>
    );
}