import axios from "axios";
import Menu from "./Menu";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Home = (search, setSearch) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=373c0a426b8e43d19559088f49c43527&search=${search}`
        );
        // console.log("ok=>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="section-home">
      <Menu />
      <div className="home">
        <h1>New and trending</h1>
        <div className="all-games">
          {data.results.map((game, index) => {
            return (
              <div key={index}>
                <div className="game">
                  <Link to={`/games/${game.id}`}>
                    <img src={game.background_image} alt="" />
                  </Link>
                  <div className="title-game">
                    <h2>{game.name}</h2>
                    {game.parent_platforms.map((platform, index) => {
                      return <p key={index}>{platform.platform.name}</p>;
                    })}
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
export default Home;
