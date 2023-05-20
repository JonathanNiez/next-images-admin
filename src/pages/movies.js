import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "http://localhost/next-movies/php/movies.php"
        );
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  function loadMovies() {
    return (
      Array.isArray(movies) &&
      movies.map(function (m, index) {
        return (
          <div
            className="bg-gray-300 hover:bg-gray-100 w-80 h-fit border-gray-500 border-r-gray-300 border-t-black border-2 p-2 rounded-xl m-2  shadow-md"
            key={index}
          >
            <h1 className="text-black text-center text-2xl font-bold">
              {m.movieTitle}
            </h1>
            <div className="text-black flex items-center justify-center">
              <img
                className="flex rounded-md border-md border-black border-2"
                src={m.movieImage}
              ></img>
            </div>
            <h1 className="text-black text-center">Genre: {m.movieGenre}</h1>
          </div>
        );
      })
    );
  }

  return (
    <div>
      <NavBar />
      <div className="p-2 grid gap-3 grid-cols-4 h-auto place-items-center justify-center">
        {" "}
        {loadMovies()}
      </div>{" "}
      <Footer />
    </div>
  );
}
