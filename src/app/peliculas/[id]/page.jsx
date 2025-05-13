import MovieDetails from "../MovieDetails";

async function getMovie(id) {
  const response = await fetch(`https://mflixbackend.azurewebsites.net/api/movies/${id}`);
  if (!response.ok) {
    throw new Error("error en la api al traer la pelicula por ID");
  }
  return response.json();
}
export default async function MoviePage({ params }) {
  const movie = await getMovie(params.id);
  return (
    <div className="flex flex-col items-center">
      <MovieDetails movie={movie} />
    </div>
  );
}