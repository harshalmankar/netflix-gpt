import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const jsonData = await data.json();
      const filterData = jsonData.results.filter(
        (video) => video.type == "Trailer"
      );
      const trailer = filterData[0];
      dispatch(addTrailerVideo(trailer));
      console.log(trailer);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
