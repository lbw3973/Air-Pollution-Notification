import React, { useState } from "react";
import * as S from "./LocalInfo.style";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import {
  addFavoriteData,
  removeFavoriteData,
} from "../../reducers/getFavoriteData";
import { parseGrade } from "../../utils/parseGrade";

const LocalInfo = (props) => {
  const [isClicked, setIsClicked] = useState(props.favorited);

  const favoriteDispatch = useDispatch();

  const onClickFavorite = () => {
    setIsClicked(!isClicked);
    !isClicked
      ? favoriteDispatch(addFavoriteData(props))
      : favoriteDispatch(removeFavoriteData(props));
  };

  return (
    <S.Conatianer backgroundColor={props ? props.pm10Grade : ""}>
      <S.DivLocation>
        <h2>{props ? props.stationName : "알 수 없음"}</h2>
        <p style={{ fontSize: "14px" }}>{props ? props.sidoName : "??"}</p>
      </S.DivLocation>
      <S.DivStatus>
        <S.WrapperStatus>
          <h2>{props ? parseGrade(Number(props.pm10Grade)) : "??"}</h2>
        </S.WrapperStatus>
      </S.DivStatus>
      <S.DivPmValue>
        <p>미세먼지 수치 : {props ? props.pm10Value : "알 수 없음"}</p>
        <p>({props ? props.dataTime : "알 수 없음"} 기준)</p>
      </S.DivPmValue>
      <S.DivFavorite onClick={onClickFavorite}>
        {isClicked ? (
          <TiStarFullOutline size="40" />
        ) : (
          <TiStarOutline size="40" />
        )}
      </S.DivFavorite>
    </S.Conatianer>
  );
};

export default LocalInfo;
