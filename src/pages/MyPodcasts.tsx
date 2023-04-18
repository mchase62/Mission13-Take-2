import { useState } from "react";
import data from "../MovieData.json";

const MovieDataSource = data.MovieData;
// this is just a link to a podcast
function MovieList() {
  const [ListOfMovies, setListOfMovies] = useState(MovieDataSource);

  return (
    <>
      <div>
        <h3>Joel Hilton's Podcast</h3>
        <a href="https://baconsale.com/">Click Here</a>
      </div>
    </>
  );
}

export default MovieList;
