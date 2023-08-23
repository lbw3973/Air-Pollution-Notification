import React from "react";
import * as S from "./Navigation.style";
import { MdLocationOn } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <S.Container>
      <Link to="/myLocation">
        <S.BtnNav radius="left" selected={location.pathname === "/myLocation"}>
          <MdLocationOn size="70" />
          <p>내 지역보기</p>
        </S.BtnNav>
      </Link>
      <Link to="/allLocation">
        <S.BtnNav selected={["/allLocation", "/"].includes(location.pathname)}>
          <GrMapLocation size="70" />
          <p>전체 시도보기</p>
        </S.BtnNav>
      </Link>
      <Link to="/favorite">
        <S.BtnNav radius="right" selected={location.pathname === "/favorite"}>
          <AiOutlineStar size="70" />
          <p>즐겨찾기</p>
        </S.BtnNav>
      </Link>
    </S.Container>
  );
};

export default Navigation;
