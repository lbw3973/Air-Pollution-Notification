import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  bottom: 11px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  min-width: 500px;
  height: 100px;
  border-radius: 0 0 10px 10px;
`;

export const BtnNav = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  border: 1px solid #fff;
  padding: 10px;
  border-radius: ${(props) => setRadius(props.radius)};
  background-color: #bbdfff;
  cursor: pointer;
  &:hover {
    background-color: #7fc3ff;
  }
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
