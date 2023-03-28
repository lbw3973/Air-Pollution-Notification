import React from "react";
import * as S from "./LocalInfo.style";

const LocalInfo = ({ props }) => {
  return (
    <S.Conatianer backgroundColor={props ? props.backgroundColor : ""}>
      <S.DivLocation>
        {props ? <h2>props.detailLocation</h2> : <h2>알 수 없음</h2>}
        {props ? (
          <p style={{ fontSize: "14px" }}>서울</p>
        ) : (
          <p style={{ fontSize: "14px" }}>??</p>
        )}
      </S.DivLocation>
      <S.DivStatus>
        <S.WrapperStatus>
          {props ? <h2>props.status</h2> : <h2>??</h2>}
        </S.WrapperStatus>
      </S.DivStatus>
      <S.DivPmValue>
        <p>미세먼지 수치 : {props ? props.pmValue : "알 수 없음"}</p>
        <p>({props ? props.data : "알 수 없음"} 기준)</p>
      </S.DivPmValue>
    </S.Conatianer>
  );
};

export default LocalInfo;
