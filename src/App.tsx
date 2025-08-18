import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop/Desktop";
import { ProjectDetail } from "./screens/ProjectDetail/ProjectDetail";
import { About } from "./screens/About/About";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};