import React from "react";
import { useSelector } from "react-redux";
import LocalInfo from "../../components/LocalInfo/LocalInfo";
import * as S from "./Favorite.style";

const Favorite = () => {
  const favorites = useSelector((state) => state.getFavoriteDataReducer);
  const favor_stationName = favorites.map((data) => data.stationName);
  return (
    <>
      {favorites &&
        favorites.map((city) => (
          <LocalInfo
            key={city.stationName}
            pm10Grade={city.pm10Grade}
            sidoName={city.sidoName}
            stationName={city.stationName}
            pm10Value={city.pm10Value}
            dataTime={city.dataTime}
            favorited={favor_stationName.includes(city.stationName)}
          />
        ))}
    </>
  );
};

export default Favorite;
