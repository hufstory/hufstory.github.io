import React from "react";
import { BrowserRouter as Routes, Route, HashRouter } from "react-router-dom";
import RealMain from "./pages/Main/RealMain";
import About from "./pages/About/About";
import Teams from "./pages/Teams/Teams";
import TeamsOechul from "./pages/Teams/TeamsOechul";
import TeamsGbus from "./pages/Teams/TeamsGbus";
import TeamsHufsSpetition from "./pages/Teams/TeamsHufsSpetition";
import Recruit from "./pages/Recruit/Recruit";
import Activity from "./pages/Activity/Activity";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RealMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/TeamsOechul" element={<TeamsOechul />} />
        <Route path="/TeamsGbus" element={<TeamsGbus />} />
        <Route path="/TeamsHufsSpetition" element={<TeamsHufsSpetition />} />
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
