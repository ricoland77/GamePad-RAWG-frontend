import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Game = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();
  // console.log(name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=373c0a426b8e43d19559088f49c43527/${name}`
        );
        // console.log("salut => ", response.data);
        // setData(response.data);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [name]);

  return <div></div>;
};

export default Game;
