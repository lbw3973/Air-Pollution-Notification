import React from "react";
import * as S from "./Navigation.style";
import { MdLocationOn } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <S.Container>
      <Link to="/myLocation">
        <S.BtnNav radius="left">
          <MdLocationOn size="70" />
          <p>내 지역보기</p>
        </S.BtnNav>
      </Link>
      <Link to="/allLocation">
        <S.BtnNav>
          <GrMapLocation size="70" />
          <p>전체 시도보기</p>
        </S.BtnNav>
      </Link>
      <Link to="/favorite">
        <S.BtnNav radius="right">
          <AiOutlineStar size="70" />
          <p>즐겨찾기</p>
        </S.BtnNav>
      </Link>
    </S.Container>
  );
};

export default Navigation;
