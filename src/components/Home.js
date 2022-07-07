import HighlightCard from "./HighlightCard";
import MovieCard from "../MovieCard";

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
    return (
        <div>
            <h1 className="HeaderText" >Newest Releases and Timeless Classics!!</h1>
            <h2 style={{ fontStyle: "italic", marginTop: 40}}>Choose from an ENDLESS selection of movies...</h2>
            <div style={{ display: "flex", justifyContent:"space-evenly", marginTop: 50}}>
                {/* <HighlightCard header="Select a Holiday" />
                <HighlightCard header="Pick a Design" />
                <HighlightCard header="Let us Deliver It!" /> */}

                <MovieCard posterImage={movieData[0].Poster} title={movieData[0].Title} rating={movieData[0].Rated}/>
                <MovieCard posterImage={movieData[1].Poster} title={movieData[1].Title} rating={movieData[1].Rated}/>
                <MovieCard posterImage={movieData[2].Poster} title={movieData[2].Title} rating={movieData[2].Rated} />
            </div>
        </div>
    );
}