import styled from "@emotion/styled";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import Navigation from "./components/Navigation/Navigation";
import AllLocation from "./pages/AllLocation/AllLocation";
import Favorite from "./pages/Favorite/Favorite";
import MyLocation from "./pages/MyLocation/MyLocation";
import { persistor, store } from "./store";

const Container = styled.div`
  width: 720px;
  height: 95vh;
  min-width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  border: 1px solid #ddd;
  border-radius: 10px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 30px;
  width: 100%;
  height: 73vh;
  overflow-y: auto;
  background-color: #e6ffe8;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bbdfff;
  border-bottom: 1px solid #ddd;
  min-width: 500px;
  border-radius: 10px 10px 0 0;
`;

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <Wrapper>
            <HeaderContainer>
              <DropdownMenu />
            </HeaderContainer>
            <Routes>
              <Route path="/" element={<AllLocation />} />
              <Route path="/myLocation" element={<MyLocation />} />
              <Route path="/allLocation" element={<AllLocation />} />
              <Route path="/favorite" element={<Favorite />} />
            </Routes>
          </Wrapper>
          <Navigation />
        </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;
