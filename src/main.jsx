import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/Global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
