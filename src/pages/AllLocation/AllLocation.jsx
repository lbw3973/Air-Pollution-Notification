import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import LocalInfo from "../../components/LocalInfo/LocalInfo";
import * as S from "./AllLocation.style";

const AllLocation = () => {
  return (
    <>
      <S.HeaderContainer>
        <DropdownMenu />
      </S.HeaderContainer>
      <LocalInfo />
    </>
  );
};

export default AllLocation;
