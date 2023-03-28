import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPollutionData } from "../../reducers/getPollutionData";
import { getStationData } from "../../reducers/getStationData";
import * as S from "./DropdownMenu.style";

const DropdownMenu = () => {
  const { pathname } = useLocation();
  const CityDispatch = useDispatch();
  const StationDispatch = useDispatch();

  const [selected, setSelected] = useState("서울");
  useEffect(() => {
    CityDispatch(getPollutionData(selected));
  }, [selected]);
  const cities = useSelector((state) => state.getPollutionReducer);

  const [station, setStation] = useState("도봉구");
  useEffect(() => {
    StationDispatch(getStationData(station));
  }, [station]);

  const sidoName = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
    "세종",
  ];
  const handleCitySelect = (e) => {
    setSelected(e.target.value);
  };
  const handleStationSelect = (e) => {
    setStation(e.target.value);
  };
  if (pathname === "/favorite") return <S.Title>즐겨찾기 목록</S.Title>;
  return (
    <S.Contaier>
      <S.SelectCity onChange={handleCitySelect} defaultValue={selected}>
        {sidoName.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </S.SelectCity>
      {pathname == "/myLocation" && (
        <S.SelectCity onChange={handleStationSelect} value={station}>
          {cities.data &&
            cities.data.map((city) => (
              <option value={city.stationName} key={city.stationName}>
                {city.stationName}
              </option>
            ))}
        </S.SelectCity>
      )}
    </S.Contaier>
  );
};

export default DropdownMenu;
