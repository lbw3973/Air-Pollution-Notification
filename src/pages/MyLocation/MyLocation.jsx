import { useSelector } from "react-redux";
import LocalInfo from "../../components/LocalInfo/LocalInfo";

const MyLocation = () => {
  const cities = useSelector((state) => state.getPollutionReducer);
  const station = useSelector((state) => state.getStationDataReducer);

  const favorites = useSelector((state) => state.getFavoriteDataReducer);
  const favor_stationName = favorites.map((data) => data.stationName);
  return (
    <>
      {cities.data &&
        cities.data
          .filter((_data) => _data.stationName === station)
          .map((city) => (
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

export default MyLocation;
