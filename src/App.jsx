import styled from "@emotion/styled";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AllLocation from "./pages/AllLocation/AllLocation";
import Favorite from "./pages/Favorite/Favorite";
import MyLocation from "./pages/MyLocation/MyLocation";
import { store } from "./store";

const Container = styled.div`
  width: 720px;
  height: 95vh;
  min-width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  border: 1px solid #ccc;
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
  height: 74vh;
  overflow-y: auto;
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Wrapper>
          <Routes>
            <Route path="/" element={<MyLocation />} />
            <Route path="/myLocation" element={<MyLocation />} />
            <Route path="/allLocation" element={<AllLocation />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Wrapper>
        <Navigation />
      </Container>
    </Provider>
  );
}

export default App;
