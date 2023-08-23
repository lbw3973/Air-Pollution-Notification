import { useSelector } from "react-redux";
import LocalInfo from "../../components/LocalInfo/LocalInfo";
import Loading from "../../components/Loading/Loading";

const AllLocation = () => {
  const cities = useSelector((state) => state.getPollutionReducer);

  const favorites = useSelector((state) => state.getFavoriteDataReducer);
  const favor_stationName = favorites.map((data) => data.stationName);

  if (cities.loading) return <Loading />;
  return (
    <>
      {cities.data &&
        cities.data.map((city) => (
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

export default AllLocation;
