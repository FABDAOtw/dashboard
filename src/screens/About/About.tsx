import React from "react";
import { ExternalLink } from "lucide-react";
import { FooterSection } from "../Desktop/sections/FooterSection";
import { Badge } from "../../components/ui/badge";

export const About = (): JSX.Element => {
  return (
    <div className="w-full bg-[#F5F3EE] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] tablet:h-[500px] desktop:h-[600px] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              background: `linear-gradient(180deg, rgba(179, 230, 218, 0.8) 0%, rgba(179, 230, 218, 0.6) 100%), url(/hypercert.webp) center/cover no-repeat`,
            }}
          />
          
          {/* Logo positioned in top left */}
          <div className="absolute top-6 tablet:top-8 desktop:top-12 left-4 tablet:left-8 desktop:left-10">
            <div className="w-16 h-16 tablet:w-20 tablet:h-20 desktop:w-24 desktop:h-24 rounded-full bg-[#179080] flex items-center justify-center">
              <img className="w-10 h-10 tablet:w-12 tablet:h-12 desktop:w-14 desktop:h-14" alt="Logo" src="/Logo_en.svg" />
            </div>
          </div>

          {/* Content positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[40px] tablet:rounded-t-[50px] desktop:rounded-t-[60px] px-4 tablet:px-8 desktop:px-10 pt-8 tablet:pt-10 desktop:pt-12 pb-6 tablet:pb-8 desktop:pb-10">
            <div className="max-w-[800px]">
              <h1 className="font-h2 font-[number:var(--h2-font-weight)] text-[#093532] text-h2-mobile tablet:text-h2-tablet desktop:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] mb-4 tablet:mb-6">
                About GreenSofa Hypercerts
              </h1>
              
              <div className="flex items-center gap-2 mb-6 tablet:mb-8">
                <div className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                  Time of work
                </div>
                <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#093532] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                  2023 → Present
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="white"/>
                  </svg>
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
                  href="https://hackmd.io/@greensofa/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 tablet:w-12 tablet:h-12 rounded-full bg-[#6b8483] hover:bg-[#093532] transition-colors duration-300 flex items-center justify-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
                  </svg>
                </a>
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
                  Project Title: GreenSofa Hypercerts Dashboard
                </div>
                <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)] mb-2">
                  Timeline: 2023 – Present
                </div>
                <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)] mb-4">
                  Location: Taiwan
                </div>
              </div>

              <div className="mb-6">
                <p className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] mb-4">
                  <strong>Summary and Quantifiable results:</strong> The GreenSofa Hypercerts Dashboard is a comprehensive platform that documents and verifies local public good contributions across Taiwan. This innovative project combines blockchain technology with impact measurement to create a transparent and traceable system for recognizing community contributions.
                </p>
                <p className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] mb-4">
                  In partnership with Formosa Art Bank DAO (FAB DAO), we have created a digital ecosystem that bridges the gap between traditional public good work and Web3 verification systems. Our platform enables organizations and individuals to mint hypercerts for their contributions, creating a permanent record of impact that can be verified and shared.
                </p>
                <p className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                  The dashboard currently tracks over 56 projects, 24 hypercerts, and involves more than 1,032 participants, representing over $4.2 million in funding for public good initiatives across Taiwan.
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
                  href="https://hypercerts.org"
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
                    0x2914...29D2rg
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                    Verified on
                  </span>
                  <span className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#6b8483] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                    May 01, 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <Badge
                variant="outline"
                className="px-4 py-2 rounded-full border-[#093532] bg-transparent hover:bg-[#093532] hover:text-white transition-colors duration-300"
              >
                <span className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#093532] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                  GREENSOFA
                </span>
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 rounded-full border-[#093532] bg-transparent hover:bg-[#093532] hover:text-white transition-colors duration-300"
              >
                <span className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#093532] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                  HYPERCERTS
                </span>
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 rounded-full border-[#093532] bg-transparent hover:bg-[#093532] hover:text-white transition-colors duration-300"
              >
                <span className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#093532] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                  TAIWAN
                </span>
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 rounded-full border-[#093532] bg-transparent hover:bg-[#093532] hover:text-white transition-colors duration-300"
              >
                <span className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#093532] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                  PUBLIC GOODS
                </span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};