import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Menu, X, Globe } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { FooterSection } from "../Desktop/sections/FooterSection";

export const ProjectDetail = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: id,
    image: "/hypercert.webp",
    title: "FAB DAO第二期購藏執行",
    timeOfWork: "Oct. 09, 2024 → Dec. 09, 2024",
    projectTitle: "FAB DAO第二期購藏執行",
    timeline: "March 2023 – December 2023",
    location: "Huangxi River Corridor, Tianmu District, Taipei City, Taiwan",
    summary: "FAB DAO，全名 Formosa Art Bank DAO，為公益 NFT 自治組織，集結跨域組織與個人，開創臺灣 NFT 結合公益、藝術、文化的新篇章。感謝Yii慷慨捐贈群島資料庫 No.1~10給FAB DAO藝術銀行",
    exploreUrl: "https://hypercerts.org/app/view#claimId=0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-442341478564487395328",
    verifiedBy: "0x2914...29D2rg",
    verifiedOn: "May 01, 2025",
    tags: ["FABDAO", "ART"]
  };

  return (
    <div className="w-full bg-[#F5F3EE] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Navigation Bar */}
        <section className="flex flex-col items-center gap-gap-mobile tablet:gap-gap-tablet desktop:gap-16 pt-6 pb-8 px-4 tablet:px-8 desktop:px-10 w-full">
          <Card className="flex w-full items-center gap-gap-mobile tablet:gap-gap-tablet desktop:gap-6 px-card-padding-mobile tablet:px-card-padding-tablet desktop:px-6 py-4 bg-white rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[20px]">
            <img className="w-auto h-10 tablet:h-14" alt="Group" src="/Logo_en.svg" />

            <div className="flex items-center justify-end gap-6 flex-1 relative">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="tablet:hidden p-2 text-[#093532] hover:text-[#179080] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Mobile Menu Overlay */}
              {isMobileMenuOpen && (
                <div className="tablet:hidden fixed inset-0 bg-[#093532] z-50 flex flex-col">
                  {/* Header with Logo and Close Button */}
                  <div className="flex items-center justify-between p-4 bg-[#6b8483] rounded-b-3xl mx-4 mt-4 mb-8">
                    <div className="flex items-center gap-3">
                      <img className="w-12 h-12" alt="Logo" src="/Logo_en.svg" />
                      <div className="flex flex-col">
                        <span className="text-white font-medium text-lg [font-family:'DM_Sans',Helvetica]">
                          GreenSofa
                        </span>
                        <span className="text-white font-bold text-xl [font-family:'DM_Sans',Helvetica]">
                          Hypercerts
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-[#179080] transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="w-8 h-8" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col px-8 flex-1">
                    <a
                      href="/"
                      className="text-[#179080] font-bold text-4xl [font-family:'DM_Sans',Helvetica] py-6 border-b border-[#6b8483]/30"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Projects
                    </a>
                    <a
                      href="/about"
                      className="text-[#179080] font-bold text-4xl [font-family:'DM_Sans',Helvetica] py-6 border-b border-[#6b8483]/30"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-[#6b8483] font-bold text-4xl [font-family:'DM_Sans',Helvetica] py-6 border-b border-[#6b8483]/30"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Impact
                      <span className="block text-[#6b8483] font-normal text-2xl mt-1">
                        (Coming soon)
                      </span>
                    </a>

                    {/* Contact Section */}
                    <div className="mt-12">
                      <h3 className="text-white font-bold text-2xl [font-family:'DM_Sans',Helvetica] mb-6">
                        Contact
                      </h3>
                      <div className="flex flex-col gap-4">
                        <a
                          href="https://discord.gg/R5tfebnnpm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-normal text-xl [font-family:'DM_Sans',Helvetica] underline"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          DISCORD
                        </a>
                        <a
                          href="https://x.com/GreenSofa_TW"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-normal text-xl [font-family:'DM_Sans',Helvetica] underline"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          X / Twitter
                        </a>
                        <a
                          href="https://hackmd.io/@greensofa/home"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-normal text-xl [font-family:'DM_Sans',Helvetica] underline"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          HACKMD
                        </a>
                      </div>
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="px-8 py-6 border-t border-[#6b8483]/30 mt-auto">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-white font-normal text-lg [font-family:'DM_Sans',Helvetica]">
                        Powered by
                      </span>
                      <span className="text-white font-bold text-xl [font-family:'DM_Sans',Helvetica]">
                        FAB DAO
                      </span>
                    </div>
                    <p className="text-white font-normal text-sm [font-family:'DM_Sans',Helvetica] text-center">
                      ©FAB DAO. All Rights Reserved.
                    </p>
                  </div>
                </div>
              )}

              {/* Desktop Navigation */}
              <nav className="hidden tablet:flex items-center gap-[35px] px-4">
                <a
                  href="/"
                  className="font-normal text-[#093532] text-lg tablet:text-xl [font-family:'DM_Sans',Helvetica]"
                >
                  Projects
                </a>
                <a
                  href="/about"
                  className="font-normal text-[#093532] text-lg tablet:text-xl [font-family:'DM_Sans',Helvetica]"
                >
                  About
                </a>
                <a
                  href="#"
                  className="font-normal text-[#6b8483] text-lg tablet:text-xl [font-family:'DM_Sans',Helvetica]"
                >
                  Impact (Coming soon)
                </a>
              </nav>
            </div>
          </Card>
        </section>

        {/* Hero Section with Card Image */}
        <div className="relative w-full h-[400px] tablet:h-[500px] desktop:h-[600px] overflow-hidden px-4 tablet:px-8 desktop:px-10 mb-8">
          <div className="relative w-full h-full max-w-[800px] mx-auto">
            {/* Card Image with rounded corners and green tint */}
            <div 
              className="absolute inset-0 w-full h-full rounded-[20px] tablet:rounded-[30px] desktop:rounded-[40px] overflow-hidden"
              style={{ 
                background: `linear-gradient(180deg, rgba(179, 230, 218, 0.3) 0%, rgba(179, 230, 218, 0.5) 100%), url(/hypercert.webp) center/cover no-repeat`,
              }}
            />
            
            {/* Logo positioned in top left */}
            <div className="absolute top-6 tablet:top-8 desktop:top-12 left-6 tablet:left-8 desktop:left-12">
              <div className="w-12 h-12 tablet:w-16 tablet:h-16 desktop:w-20 desktop:h-20 rounded-full bg-[#179080] flex items-center justify-center">
                <img className="w-6 h-6 tablet:w-8 tablet:h-8 desktop:w-10 desktop:h-10" alt="Logo" src="/Logo_en.svg" />
              </div>
            </div>

            {/* Content positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[30px] tablet:rounded-t-[40px] desktop:rounded-t-[50px] px-6 tablet:px-8 desktop:px-12 pt-6 tablet:pt-8 desktop:pt-10 pb-4 tablet:pb-6 desktop:pb-8">
              <div className="max-w-[600px]">
                <h1 className="font-h2 font-[number:var(--h2-font-weight)] text-[#093532] text-h2-mobile tablet:text-h2-tablet desktop:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] mb-4 tablet:mb-6">
                  {project.title}
                </h1>
                
                <div className="flex items-center gap-2 mb-6 tablet:mb-8">
                  <div className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                    Time of work
                  </div>
                  <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#093532] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                    {project.timeOfWork}
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://discord.gg/R5tfebnnpm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 tablet:w-12 tablet:h-12 rounded-full bg-[#6b8483] hover:bg-[#093532] transition-colors duration-300 flex items-center justify-center"
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://x.com/GreenSofa_TW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 tablet:w-12 tablet:h-12 rounded-full bg-[#6b8483] hover:bg-[#093532] transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 tablet:w-12 tablet:h-12 rounded-full bg-[#6b8483] hover:bg-[#093532] transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 tablet:px-8 desktop:px-10 py-8 tablet:py-12 desktop:py-16">
          <div className="max-w-[800px] mx-auto">
            {/* Project Information */}
            <div className="mb-8 tablet:mb-12">
              <div className="mb-6">
                <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)] mb-2">
                  Project Title: {project.projectTitle}
                </div>
                <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)] mb-2">
                  Timeline: {project.timeline}
                </div>
                <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)] mb-4">
                  Location: {project.location}
                </div>
              </div>

              <div className="mb-6">
                <p className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] mb-4">
                  <strong>Summary and Quantifiable results:</strong> {project.summary}
                </p>
              </div>

              <button className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#179080] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)] hover:text-[#093532] transition-colors duration-300">
                READ MORE
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#6b8483] mb-8 tablet:mb-12"></div>

            {/* Bottom Section */}
            <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-6 tablet:gap-8 mb-8">
              <div className="flex flex-col tablet:flex-row tablet:items-center gap-4 tablet:gap-8">
                <a
                  href={project.exploreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#179080] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)] hover:text-[#093532] transition-colors duration-300"
                >
                  View on Explore
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-2">
                  <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                    Verified by
                  </span>
                  <span className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#179080] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                    {project.verifiedBy}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                    Verified on
                  </span>
                  <span className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#6b8483] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                    {project.verifiedOn}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 rounded-full border-[#093532] bg-transparent hover:bg-[#093532] hover:text-white transition-colors duration-300"
                >
                  <span className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#093532] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                    {tag}
                  </span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};