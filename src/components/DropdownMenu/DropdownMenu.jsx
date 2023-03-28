import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStationInfo } from "../../reducers/GetStationInfo";
import * as S from "./DropdownMenu.style";

const DropdownMenu = (props) => {
  const CityDispatch = useDispatch();
  const [selected, setSelected] = useState("서울");
  const [station, setStation] = useState("");

  useEffect(() => {
    CityDispatch(getStationInfo(selected));
  }, [selected]);
  const cities = useSelector((state) => state);

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

  return (
    <S.Contaier>
      <S.SelectCity onChange={handleCitySelect} value={selected}>
        {sidoName.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </S.SelectCity>
      {props.myLocation && (
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
