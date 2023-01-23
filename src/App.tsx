import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./pages/Main/Main"
import RealMain from "./pages/Main/RealMain"
import About from "./pages/About/About"
import Teams from "./pages/Teams/Teams"
import Teams_Oechul from "./pages/Teams/Teams_Oechul"
import Teams_Gbus from "./pages/Teams/Teams_Gbus"
import Teams_Hubigo from "./pages/Teams/Teams_Hubigo"
import Recruit from "./pages/Recruit/Recruit"
import Blog from "./pages/Blog/Blog"
import Activity from "./pages/Activity/Activity"

// 모든 컴포넌트 전부 호출 (화면 하나하나 전부 다)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RealMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams_oechul" element={<Teams_Oechul />} />
        <Route path="/teams_gbus" element={<Teams_Gbus />} />
        <Route path="/teams_hubigo" element={<Teams_Hubigo />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
