import React from "react";

export default function MovieDetails({ movie }) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-[300px] h-[450px] object-cover rounded-md mb-4"
            />
            <h1 className="text-xl font-bold mb-4">{movie.title}</h1>
            <p className="text-lg mb-2">{movie.fullplot}</p>
        </div>
    )};