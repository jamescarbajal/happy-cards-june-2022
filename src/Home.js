import HighlightCard from "./HighlightCard";

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
    Poster: src="../public/avengers_poster.jpg",
  },
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
    Poster: src="../public/avengers_poster.jpg",
  },
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
    Poster: src="../public/avengers_poster.jpg",
  }
];


export default function Home() {
    return (
        <div>
            <h1 className="HeaderText" >Send them a smile with HappyCards!!</h1>
            <h2 style={{ fontStyle: "italic", marginTop: 40}}>Choose from thousands of things...</h2>
            <div style={{ display: "flex", justifyContent:"space-evenly"}}>
                {/* <HighlightCard header="Select a Holiday" />
                <HighlightCard header="Pick a Design" />
                <HighlightCard header="Let us Deliver It!" /> */}

                <MovieCard title=""/>
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    );
}