import styled from "@emotion/styled";

export const Conatianer = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 10px;
  background-color: ${({ backgroundColor }) =>
    getContainerColor(backgroundColor)};
`;

export const DivLocation = styled.div`
  height: 50px;
  padding: 10px;
  font-size: 20px;
  display: flex;
  gap: 10px;
  align-items: baseline;
  font-weight: bold;
  margin: 5px 0;
`;

export const DivStatus = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperStatus = styled.div`
  width: 40%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

export const DivPmValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const getContainerColor = (grade) => {
  switch (grade) {
    case 1:
      return "var(--Poll-Good)";
    case 2:
      return "var(--Poll-Normal)";
    case 3:
      return "var(--Poll-BadFAS)";
    case 4:
      return "var(--Poll-Bad)";
    case 5:
      return "var(--Poll-VVBad)";
    default:
      return "var(--Poll-NoData)";
  }
};
