import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RealMain from "./pages/Main/RealMain"
import About from "./pages/About/About"
import Teams from "./pages/Teams/Teams"
import TeamsOechul from "./pages/Teams/TeamsOechul"
import TeamsGbus from "./pages/Teams/TeamsGbus"
import TeamsHufsSpetition from "./pages/Teams/TeamsHufsSpetition"
import Recruit from "./pages/Recruit/Recruit"
import Activity from "./pages/Activity/Activity"

// 모든 컴포넌트 전부 호출 (화면 하나하나 전부 다)
function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App
