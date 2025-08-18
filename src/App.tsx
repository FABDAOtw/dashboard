import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop/Desktop";
import { ProjectDetail } from "./screens/ProjectDetail/ProjectDetail";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};