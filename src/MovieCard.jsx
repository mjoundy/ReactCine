import React from 'react'

const MovieCard = ({name, image, rate, link}) => {
    return (
      <div className="bg-[#282736] w-[250px] text-center rounded-xl overflow-hidden hover:bg-zinc-400">
        <img src={image} alt={name} className="w-full" />
        <div className="py-[10px]">
          <span className="text-2xl">{name}</span>
          <p className="text-lg">
            Rated {rate} | <a href={link} className="text-yellow-300">Link</a>
          </p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;


