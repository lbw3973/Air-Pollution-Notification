import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  bottom: 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  min-width: 500px;
  height: 100px;
  border-radius: 0 0 10px 10px;
`;

export const BtnNav = styled.button`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding-top: 10px;
  border-radius: ${(props) => setRadius(props.radius)};
`;

const setRadius = (radius) => {
  switch (radius) {
    case "left":
      return "0 0 0 10px";
    case "right":
      return "0 0 10px 0";
    default:
      return "0";
  }
};
