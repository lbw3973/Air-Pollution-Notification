import React from "react";
import * as S from "./Navigation.style";
import { MdLocationOn } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <S.Container>
      <S.BtnNav radius="left">
        <Link to="/myLocation">
          <MdLocationOn size="70" />
          <p>내 지역보기</p>
        </Link>
      </S.BtnNav>
      <S.BtnNav>
        <Link to="/allLocation">
          <GrMapLocation size="70" />
          <p>전체 시도보기</p>
        </Link>
      </S.BtnNav>
      <S.BtnNav radius="right">
        <Link to="/favorite">
          <AiOutlineStar size="70" />
          <p>즐겨찾기</p>
        </Link>
      </S.BtnNav>
    </S.Container>
  );
};

export default Navigation;
