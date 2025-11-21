import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes";
import ThemeProvider from "./Components/ThemeProvider/ThemeProvider";
import { getTheme } from "./service/themeService";
import "./index.css";
function Root() {
  const [theme, setTheme] = useState("default"); //fallback
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadTheme() {
      try {
        const t = await getTheme();
        setTheme(t || "default");
      } catch (err) {
        setTheme("default");
      }
      setLoaded(true);
    }
    loadTheme();
  }, []);

  if (!loaded) {
    return (
      <div className="text-center p-10 text-white">Carregando tema...</div>
    );
  }

  return (
    <ThemeProvider initialTheme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
