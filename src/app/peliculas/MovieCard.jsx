import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const toggleLike = () => {
    setLiked(!liked);
  }
  const toggleDislike = () => {
    setDisliked(!disliked);
  }

  return (
    <div className="flex flex-col items-center bg-gray-800 rounded-lg">
    <Link href ={`/peliculas/${movie._id}`}>
    <div className="w-[90px] text-center">
      {movie.poster && !imageError ? (
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="w-full h-[135px] object-cover rounded-md"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-[135px] bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-xs text-gray-600 text-center">{movie.title}</span>
        </div>
      )}
      <p className="text-xs mt-1 truncate">{movie.year}</p>
      <p className="text-xs mt-1 truncate">{movie.title}</p>
      </div>
      </Link>
      <div className="flex justify-center items-center mt-2">
        <button onClick={toggleLike} className="text-red-500">
          <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
        </button>
        <button onClick={toggleDislike} className="text-blue-500 ml-2">
          <FontAwesomeIcon icon={disliked ? solidHeart : regularHeart} />
        </button>
    </div>
    </div>
  );
}