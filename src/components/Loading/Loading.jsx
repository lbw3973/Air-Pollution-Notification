import React from "react";
import * as S from "./Loading.style";
import LoadingGIF from "../../assets/loading.gif";

function Loading() {
  return (
    <S.Container>
      <img src={LoadingGIF} alt="Loading.gif" />
    </S.Container>
  );
}

export default Loading;
