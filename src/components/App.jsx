import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../scripts/theme";
import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

import PanelTemplate from './4-Templates/PanelTemplate';

import Dashboard from "./5-Pages/Dashboard";
import Team from "./5-Pages/Team";
import Contacts from "./5-Pages/Contacts";
import Invoices from "./5-Pages/Invoices";
import Form from "./5-Pages/Form";
import Bar from "./5-Pages/Bar";
import Pie from "./5-Pages/Pie";
import Line from "./5-Pages/Line";
import FAQ from "./5-Pages/FAQ";
import Calendar from "./5-Pages/Calendar";
import Geography from "./5-Pages/Geography";

export default function App ()
{
  const [ theme, colorMode ] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <PanelTemplate>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </PanelTemplate>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
