import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto bg-[#f5f3ee]">
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};
