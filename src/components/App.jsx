import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../scripts/theme";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./5-Pages/Dashboard";
export default function App ()
{
  const [ theme, colorMode ] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
