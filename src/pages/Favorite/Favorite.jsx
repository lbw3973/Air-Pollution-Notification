import React from "react";
import LocalInfo from "../../components/LocalInfo/LocalInfo";
import * as S from "./Favorite.style";

const Favorite = () => {
  return (
    <>
      <S.HeaderContainer>
        <S.Title>즐겨찾기 목록</S.Title>
      </S.HeaderContainer>
      <LocalInfo />
    </>
  );
};

export default Favorite;
