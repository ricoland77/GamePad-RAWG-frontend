import axios from "axios";
import Menu from "./Menu";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import loader from "../assets/images/loader.gif";

const LastThirtyDays = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--rawg-backend--dk8jf2pny52x.code.run/discover/last-30-days?dates=${"2022-12-01,2022-12-31"}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <div className="container">
      <img className="loader" src={loader} alt="loader" />
    </div>
  ) : (
    <section className="section-home">
      <Menu />
      <div className="home">
        <h1>Last 30 days</h1>
        <div className="all-games">
          {data.results.map((game, index) => {
            return (
              <div key={index}>
                <div className="game">
                  <Link to={`/games/${game.id}`}>
                    <img src={game.background_image} alt="visuel du jeu" />
                  </Link>
                  <div className="title-game">
                    <div className="platforms-names">
                      {game.parent_platforms.map((platform, index) => {
                        return <p key={index}>{platform.platform.name}</p>;
                      })}
                    </div>
                    <h2>{game.name}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default LastThirtyDays;
