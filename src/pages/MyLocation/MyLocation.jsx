import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import LocalInfo from "../../components/LocalInfo/LocalInfo";
import * as S from "./MyLocation.style";

const MyLocation = () => {
  return (
    <>
      <S.HeaderContainer>
        <DropdownMenu myLocation={true} />
      </S.HeaderContainer>
      <LocalInfo />
      <LocalInfo />
      <LocalInfo />
      <LocalInfo />
      <LocalInfo />
      <LocalInfo />
      <LocalInfo />
      <LocalInfo />
      <LocalInfo />
      <LocalInfo />
    </>
  );
};

export default MyLocation;
