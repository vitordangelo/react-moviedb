import React from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
import NoImage from "../../images/no_image.jpg";

import { useHomeFetch } from "../../hooks/useHomeFetch";
import HeroImage from "../HeroImage/HeroImage";
import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";
import Spinner from "../Spinner/Spinner";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const Home = () => {
  const {
    state,
    loading,
    error,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  console.log(state);

  if (error) {
    return <div>Somethins went wrong...</div>;
  }

  return (
    <>
      {!searchTerm && state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>

      {loading && <Spinner />}

      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
