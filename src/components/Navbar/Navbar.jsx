import React from "react";
import { useContext } from "react";
import { useMutation } from "react-query";

import { cardContext } from "../Context";
import "./Navbar.css";

export const Navbar = () => {
  const { input, setInput, setMovieData} = useContext(cardContext);

  const apiKey = "8a5affec5956038d2833fa589dac1040";

  const { mutate, isLoading } = useMutation(() => {
    const inputValue = fetch(`
     https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`)
      .then((res) => res.json())
      .then((result) => setMovieData(result.results));

    return inputValue;
  });

  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log("value is :", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <nav>
          <div className="nav_logo">
            <img src="/cinema.png" alt="nav-logo" />
            <h2>SHOWTIME</h2>
          </div>
          <div className="nav_searchbar">
            <input
              type="text"
              name="input"
              id=""
              onChange={handleChange}
              value={input}
            />
            <img src="/search.png" alt="" />
          </div>
        </nav>
      </form>
    </div>
  );
};
