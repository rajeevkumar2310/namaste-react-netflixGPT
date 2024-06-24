import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
