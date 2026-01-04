import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { MoviesProvider } from "./context/MoviesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </ThemeProvider>
);
