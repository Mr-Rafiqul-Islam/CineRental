import React, { useContext, useState } from "react";
import { getImgUrl } from "../../utils/cine-utils";
import Rating from "./Rating";
import tag from "../../assets/tag.svg";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../../context";

export default function MovieCard({ movie }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);
  const cartData = state.cartData;
  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = cartData.find((item) => item.id === movie.id);
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie
        },
      });
    } else {
      console.error(
        `The Movie ${movie.title} has been added to the cart already.! `
      );
    }
  };
  const handleCloseModal = () => {
    setSelectedMovie(null);
    setIsShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setIsShowModal(true);
  };
  return (
    <>
      {isShowModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onCartAdd={handleAddToCart}
          onclose={handleCloseModal}
        />
      )}
      <figure
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        onClick={() => handleMovieSelection(movie)}
      >
        <img
          className="w-full object-cover"
          src={getImgUrl(movie.cover)}
          alt={movie.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(e) => handleAddToCart(e, movie)}
          >
            <img src={tag} alt="tag" />
            <span>${movie.price}| Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
