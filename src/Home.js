import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import { useState, useContext } from "react";
import CardForm from "./components/CardForm";
import { ThemeContext } from "./contexts/ThemeContext";


const movieData = [
    {
    Title: "The Avengers",
    Year: "2012",
    Rated: "PG-13",
    Released: "04 May 2012",
    Runtime: "143 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Joss Whedon",
    Writer: "Joss Whedon, Zak Penn",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Poster: `/avengers_poster.jpg`,
  },
  {
    Title: "The Godfather",
    Year: "1972",
    Rated: "R",
    Released: "24 Mar 1972",
    Runtime: "175 min",
    Genre: "Crime, Drama",
    Director: "Francis Ford Coppola",
    Writer: "Mario Puzo (screenplay), Francis Ford Coppola (screenplay), Mario Puzo (novel)",
    Actors: "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
    Poster: `/godfather_poster.jpg`,
  },
  {
    Title: "Ferris Bueller's Day Off",
    Year: "1986",
    Rated: "PG",
    Released: "09 Jul 1986",
    Runtime: "108 min",
    Genre: "Comedy, Drama",
    Director: "John Hughes",
    Writer: "John Hughes",
    Actors: "Matthew Broderick, Alan Ruck, Mia Sara, Jeffrey Jones",
    Poster: `/ferris_bueller_poster.jpg`,
  }
];


export default function Home() {

  const { theme } = useContext(ThemeContext);

    return (
        <div className={`App-${theme}`}>
          <CardForm />
        </div>
    );
}