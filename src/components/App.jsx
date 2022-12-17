import { Route, Routes } from "react-router-dom";
import Dashboard from "./5-Pages/Dashboard";
export default function App(){
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
