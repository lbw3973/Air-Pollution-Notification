import { useSelector } from "react-redux";
import LocalInfo from "../../components/LocalInfo/LocalInfo";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";

const MyLocation = () => {
  const cities = useSelector((state) => state.getPollutionReducer);
  const _station = useSelector((state) => state.getStationDataReducer);
  const [station, setStation] = useState(_station);

  const favorites = useSelector((state) => state.getFavoriteDataReducer);
  const favor_stationName = favorites.map((data) => data.stationName);

  useEffect(() => {
    if (cities.data) {
      setStation(cities.data[0].stationName);
    }
  }, [cities]);

  useEffect(() => {
    setStation(_station);
  }, [_station]);

  useEffect(() => {
    if (cities.data) {
      const _cities = cities.data.map((item) => item.stationName);
      if (!_cities.includes(_station)) {
        setStation(cities.data[0].stationName);
      }
    }
  }, []);

  if (cities.loading) return <Loading />;
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
