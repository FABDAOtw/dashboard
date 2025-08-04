import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="w-full bg-[#F5F3EE] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto">
        <ProjectsSection />
      </div>
      <div className="w-full">
        <FooterSection />
      </div>
    </div>
  );
};
