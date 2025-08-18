import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FooterSection } from "../Desktop/sections/FooterSection";

export const About = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F5F3EE] min-h-screen">
      {/* Navigation Header */}
      <header className="w-full max-w-[1440px] mx-auto px-4 tablet:px-8 desktop:px-10 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-12 h-12 tablet:w-14 tablet:h-14 rounded-full bg-[#179080] flex items-center justify-center">
              <img className="w-8 h-8 tablet:w-10 tablet:h-10" alt="Logo" src="/Logo_en.svg" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#179080] font-medium text-sm tablet:text-base [font-family:'DM_Sans',Helvetica]">
                GreenSofa
              </span>
              <span className="text-[#093532] font-bold text-lg tablet:text-xl [font-family:'DM_Sans',Helvetica]">
                Hypercerts
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden tablet:flex items-center gap-8">
            <a
              href="/"
              className="font-normal text-[#093532] text-lg hover:text-[#179080] transition-colors [font-family:'DM_Sans',Helvetica]"
            >
              Projects
            </a>
            <a
              href="/about"
              className="font-semibold text-[#179080] text-lg [font-family:'DM_Sans',Helvetica]"
            >
              About
            </a>
            <span className="font-normal text-[#6b8483] text-lg [font-family:'DM_Sans',Helvetica]">
              Impact (Coming soon)
            </span>
            <div className="flex items-center gap-2 ml-4">
              <span className="font-normal text-[#093532] text-lg [font-family:'DM_Sans',Helvetica]">EN</span>
              <span className="text-[#6b8483]">|</span>
              <span className="font-normal text-[#6b8483] text-lg [font-family:'DM_Sans',Helvetica]">CH</span>
            </div>
          </nav>

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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="tablet:hidden mt-4 py-4 border-t border-[#6b8483]/20">
            <nav className="flex flex-col gap-4">
              <a
                href="/"
                className="font-normal text-[#093532] text-lg hover:text-[#179080] transition-colors [font-family:'DM_Sans',Helvetica]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="/about"
                className="font-semibold text-[#179080] text-lg [font-family:'DM_Sans',Helvetica]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <span className="font-normal text-[#6b8483] text-lg [font-family:'DM_Sans',Helvetica]">
                Impact (Coming soon)
              </span>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-normal text-[#093532] text-lg [font-family:'DM_Sans',Helvetica]">EN</span>
                <span className="text-[#6b8483]">|</span>
                <span className="font-normal text-[#6b8483] text-lg [font-family:'DM_Sans',Helvetica]">CH</span>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="w-full max-w-[1440px] mx-auto px-4 tablet:px-8 desktop:px-10 py-8 tablet:py-12 desktop:py-16">
        {/* Introduction Section */}
        <section className="flex flex-col desktop:flex-row items-center gap-8 desktop:gap-16 mb-16 tablet:mb-20 desktop:mb-24">
          <div className="flex-1 desktop:order-1">
            <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-[#093532] text-h2-mobile tablet:text-h2-tablet desktop:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] mb-6">
              Introduction
            </h2>
            <p className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
              Hypercerts Dashboard is a curation platform designed specifically for public contributions in Taiwan. Using Hypercert technology, we transform fragmented actions into visualised, traceable, and verifiable impact data—ensuring that public value is no longer overlooked, but instead becomes the foundation for visibility, comparison, connection, and further incentives.
            </p>
          </div>
          <div className="flex-1 desktop:order-2">
            <div className="w-full h-[300px] tablet:h-[400px] desktop:h-[440px] rounded-[20px] tablet:rounded-[30px] desktop:rounded-[40px] overflow-hidden">
              <div 
                className="w-full h-full"
                style={{ 
                  background: `linear-gradient(135deg, #179080 0%, #0d6b5c 100%)`,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 Q50 0 80 20 Q100 50 80 80 Q50 100 20 80 Q0 50 20 20 Z' fill='%23000000' opacity='0.1'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              />
            </div>
          </div>
        </section>

        {/* Objective Section */}
        <section className="flex flex-col desktop:flex-row items-center gap-8 desktop:gap-16 mb-16 tablet:mb-20 desktop:mb-24">
          <div className="flex-1 desktop:order-2">
            <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-[#093532] text-h2-mobile tablet:text-h2-tablet desktop:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] mb-6">
              Objective
            </h2>
            <p className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
              By using Hypercerts as the unit of impact, we curate public goods contributions across different fields in Taiwan.
            </p>
          </div>
          <div className="flex-1 desktop:order-1">
            <div className="w-full h-[300px] tablet:h-[400px] desktop:h-[440px] rounded-[20px] tablet:rounded-[30px] desktop:rounded-[40px] overflow-hidden">
              <div 
                className="w-full h-full"
                style={{ 
                  background: `linear-gradient(135deg, #179080 0%, #0d6b5c 100%)`,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 Q50 10 70 30 Q90 50 70 70 Q50 90 30 70 Q10 50 30 30 Z' fill='%23000000' opacity='0.1'/%3E%3C/svg%3E")`,
                  backgroundSize: '150px 150px',
                  backgroundRepeat: 'repeat'
                }}
              />
            </div>
          </div>
        </section>

        {/* Featured / Recommended Hypercerts Section */}
        <section className="flex flex-col desktop:flex-row items-start gap-8 desktop:gap-16">
          <div className="flex-1 desktop:order-1">
            <h2 className="font-h2 font-[number:var(--h2-font-weight)] text-[#093532] text-h2-mobile tablet:text-h2-tablet desktop:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] mb-6">
              Featured / Recommended Hypercerts
            </h2>
            <ul className="space-y-4 font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#179080] rounded-full mt-2 flex-shrink-0"></span>
                <span>Allow users to deeply understand the actions, participants, and contribution value behind each Hypercert.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#179080] rounded-full mt-2 flex-shrink-0"></span>
                <span>In the future, we will visualise the relationships and connections with ecosystem partners such as FAB DAO and GreenSofa.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#179080] rounded-full mt-2 flex-shrink-0"></span>
                <span>Through the Hypercert Dashboard, the international community will have a central place to see Taiwan's development and contributions in public goods.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 desktop:order-2">
            <div className="w-full h-[300px] tablet:h-[400px] desktop:h-[440px] rounded-[20px] tablet:rounded-[30px] desktop:rounded-[40px] overflow-hidden">
              <div 
                className="w-full h-full"
                style={{ 
                  background: `linear-gradient(135deg, #179080 0%, #0d6b5c 100%)`,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 25 Q50 5 75 25 Q95 50 75 75 Q50 95 25 75 Q5 50 25 25 Z' fill='%23000000' opacity='0.1'/%3E%3C/svg%3E")`,
                  backgroundSize: '180px 180px',
                  backgroundRepeat: 'repeat'
                }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};