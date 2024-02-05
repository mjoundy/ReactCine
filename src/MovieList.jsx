import React from "react";
import MovieCard from "./MovieCard";
import FP from "./assets/Pirates.jpg";
import Batman from "./assets/batman.jpg"
import Spiderman from "./assets/Spiderman.jpg"
import DeadPool from "./assets/Deadpool.webp"

const MovieList = ({searchValue}) => {
  const films = [
    { name: "Pirate", image: FP, link: "/", rate: 10 },
    { name: "Batman", image: Batman, link: "/", rate: 5 },
    { name: "Spiderman", image: Spiderman, link: "/", rate: 9 },
    { name: "Deadpool", image: DeadPool, link: "/", rate: 6 },
    { name: "Flash", image: FP, link: "/", rate: 4 },
    { name: "Hulck", image: FP, link: "/", rate: 10 },
  ];

  return (
    <div className="px-[50px] flex gap-[20px] my-[50px] flex-wrap justify-center">
      {films.filter(el => el.name.toLowerCase().includes(searchValue)).map((film, index) => (
        <MovieCard
          key={index}
          name={film.name}
          image={film.image}
          link={film.link}
          rate={film.rate}
        />
      ))}
    </div>
  );
};

export default MovieList;
