import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loader from "../assets/images/loader.gif";

const Game = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  // console.log(name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=373c0a426b8e43d19559088f49c43527`
        );
        // console.log("ok => ", response);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="container">
      <img className="loader" src={loader} alt="loader" />
    </div>
  ) : (
    <div>
      <section className="detail-game">
        <img src={data.background_image} alt="" />
        <div>
          <img
            className="small-image"
            src={data.background_image_additional}
            alt=""
          />
          <p className="release">{data.released}</p>
          <h2 className="title">{data.name}</h2>
        </div>
      </section>
      <section className="carousel">
        <p>Games like {data.name}</p>
        <Carousel showThumbs={false} showStatus={false}>
          <div className="carousel-game">
            {data.stores.map((elem, index) => {
              return (
                <>
                  <div key={index}>
                    <img src={elem.store.image_background} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default Game;
