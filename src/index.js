// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";
import ThemeProvider from "./Components/ThemeProvider/ThemeProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider initialTheme="null">
      {/* <ThemeProvider initialTheme="christmas"> */}
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
