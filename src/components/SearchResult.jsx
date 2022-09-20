import React, { Fragment } from "react";
import { cardContext } from "../components/Context";
import { useContext } from "react";
import { Card } from "../components/Card/Card";

const SearchResult = () => {
  const { movieData } = useContext(cardContext);

  return (
    <div>
      <section className="movie_cards">
        {movieData.map((data) => {

           
          return (
            <Fragment key={data.id}>
            <Card
              title={data.title}
              release={data.release_date}
              poster={data.poster_path}
            />
            </Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default SearchResult;
