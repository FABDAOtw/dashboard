import React from "react";
import { Menu, X } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../../../../components/ui/pagination";

export const ProjectsSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Stats data
  const statsData = [
    { title: "PROJECTS", value: "56" },
    { title: "HYPERCERTS", value: "24" },
    { title: "PARTICIPANTS", value: "1,032" },
    { title: "FUNDING (USD)", value: "$4,200,000" },
  ];

  // Featured projects data
  const featuredProjects = [
    {
      image: "/image-34.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      description:
        "FAB DAO，全名 Formosa Art Bank DAO，為公益 NFT 自治組織，集結跨域組織與個人，開創臺灣 NFT 結合公益、藝術、文化的新篇章。\n感謝Yii慷慨捐贈群島資料庫 No.1~10給FAB DAO藝術銀行\n第三行",
      tags: ["FABDAO", "ART"],
    },
    {
      image: "/image-34-1.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      description:
        "FAB DAO，全名 Formosa Art Bank DAO，為公益 NFT 自治組織，集結跨域組織與個人，開創臺灣 NFT 結合公益、藝術、文化的新篇章。\n感謝Yii慷慨捐贈群島資料庫 No.1~10給FAB DAO藝術銀行\n第三行",
      tags: ["FABDAO", "ART"],
    },
    {
      image: "/image-34-8.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      description:
        "FAB DAO，全名 Formosa Art Bank DAO，為公益 NFT 自治組織，集結跨域組織與個人，開創臺灣 NFT 結合公益、藝術、文化的新篇章。\n感謝Yii慷慨捐贈群島資料庫 No.1~10給FAB DAO藝術銀行\n第三行",
      tags: ["FABDAO", "ART"],
    },
    {
      image: "/image-34-3.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      description:
        "FAB DAO，全名 Formosa Art Bank DAO，為公益 NFT 自治組織，集結跨域組織與個人，開創臺灣 NFT 結合公益、藝術、文化的新篇章。\n感謝Yii慷慨捐贈群島資料庫 No.1~10給FAB DAO藝術銀行\n第三行",
      tags: ["FABDAO", "ART"],
    },
  ];

  // Other projects data
  const otherProjects = [
    {
      image: "/image-34-4.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      tags: ["FABDAO", "ART"],
    },
    {
      image: "/image-34-5.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      tags: ["FABDAO", "ART"],
    },
    {
      image: "/image-34-6.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      tags: ["FABDAO", "ART"],
    },
    {
      image: "/image-34-7.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      tags: ["FABDAO", "ART"],
    },
    {
      image: "/image-34-8.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      tags: ["FABDAO", "ART"],
    },
    {
      image: "/image-34-9.png",
      org: "[Name of the org]",
      title: "Tamagochi at Riverside",
      startDate: "2024/10/09",
      endDate: "2024/10/9",
      tags: ["FABDAO", "ART"],
    },
  ];

  return (
    <section className="flex flex-col items-center gap-gap-mobile tablet:gap-gap-tablet desktop:gap-16 pt-6 pb-[120px] px-4 tablet:px-8 desktop:px-10 w-full">
      {/* Navigation Bar */}
      <Card className="flex w-full items-center justify-between gap-gap-mobile tablet:gap-gap-tablet desktop:gap-6 px-card-padding-mobile tablet:px-card-padding-tablet desktop:px-6 py-4 bg-white rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[20px]">
        <img className="w-56 h-10 tablet:h-14" alt="Group" src="/Logo_en.svg" />

        <div className="flex items-center gap-6 relative">
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
                  href="#"
                  className="text-[#179080] font-bold text-4xl [font-family:'DM_Sans',Helvetica] py-6 border-b border-[#6b8483]/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#"
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
              href="#"
              className="font-semibold text-[#179080] text-lg tablet:text-xl [font-family:'DM_Sans',Helvetica]"
            >
              Projects
            </a>
            <a
              href="#"
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

      <div className="flex flex-col items-start gap-12 tablet:gap-16 desktop:gap-20 w-full">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-6 tablet:gap-8 desktop:gap-9 w-full">
          <div className="flex flex-col items-start gap-4 max-w-[1016px]">
            <h1 className="font-h2 font-[number:var(--h2-font-weight)] text-[#093532] text-h2-mobile tablet:text-h2-tablet desktop:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              See the act. Track the fact
            </h1>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#2a6355] text-lg tablet:text-xl tracking-[0] leading-7">
              The Hypercerts Dashboard documents and verifies local public good
              contributions in Taiwan — turning actions into traceable facts and
              shared value.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap items-center gap-gap-mobile tablet:gap-gap-tablet desktop:gap-4 w-full">
            {statsData.map((stat, index) => (
              <Card
                key={index}
                className="flex flex-col min-w-[200px] tablet:min-w-[250px] desktop:min-w-[274px] items-start gap-1 px-card-padding-mobile tablet:px-card-padding-tablet desktop:px-6 py-4 flex-1 bg-white rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[20px]"
              >
                <CardContent className="p-0 w-full">
                  <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
                    {stat.title}
                  </div>
                  <div className="font-h4 font-[number:var(--h4-font-weight)] text-[#179080] text-h4-mobile tablet:text-h4-tablet desktop:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                    {stat.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col items-start gap-6 w-full">
          {/* Projects Header and Filters */}
          <div className="flex flex-col tablet:flex-row tablet:items-center gap-4 tablet:gap-[26px] w-full">
            <h2 className="flex-1 font-h2 font-[number:var(--h2-font-weight)] text-[#093532] text-h2-mobile tablet:text-h2-tablet desktop:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Projects
            </h2>
          </div>

          <div className="flex flex-col items-start gap-8 tablet:gap-10 desktop:gap-12 w-full">
            {/* Featured Projects */}
            <div className="flex flex-col items-start gap-6 w-full">
              <h3 className="font-h4 font-[number:var(--h4-font-weight)] text-[#179080] text-h4-mobile tablet:text-h4-tablet desktop:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                Featured
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-gap-mobile tablet:gap-gap-tablet desktop:gap-6 w-full">
                {featuredProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="flex flex-col min-w-featured-mobile tablet:min-w-featured-tablet desktop:min-w-featured-desktop max-w-featured-mobile tablet:max-w-featured-tablet desktop:max-w-featured-desktop flex-1 bg-white rounded-featured-mobile tablet:rounded-featured-tablet desktop:rounded-[40px_40px_20px_20px] overflow-hidden border-2 border-solid border-[#f5f3ee] hover:border-[#093532] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="h-[200px] tablet:h-[280px] desktop:h-[358.66px] w-full overflow-hidden flex justify-center">
                      <img
                        className="w-full h-full object-cover group-hover:saturate-0 transition-all duration-300"
                        alt="Project image"
                        src={project.image}
                      />
                    </div>
                    <CardContent className="flex flex-col items-start gap-3 p-card-padding-mobile tablet:p-card-padding-tablet desktop:p-6 w-full -mt-6 tablet:-mt-8 desktop:-mt-12 bg-white group-hover:bg-[#093532] rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[20px_20px_0px_0px] transition-all duration-300">
                      <div className="flex flex-col items-start gap-2 w-full">
                        <div className="flex flex-col items-start justify-center gap-2 pb-2 w-full">
                          <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#093532] group-hover:text-white text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)] transition-colors duration-300">
                            {project.org}
                          </div>
                          <h4 className="font-h5 font-[number:var(--h5-font-weight)] text-[#093532] group-hover:text-white text-h5-mobile tablet:text-h5-tablet desktop:text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--h5-font-style)] transition-colors duration-300">
                            {project.title}
                          </h4>
                          <div className="flex flex-wrap items-start gap-2 w-full">
                            <div className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] group-hover:text-white text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] transition-colors duration-300">
                              Timeline
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#2a6355] group-hover:text-white text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)] transition-colors duration-300">
                                {project.startDate}
                              </div>
                              <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:[&>path]:fill-white transition-all duration-300">
                                <path d="M9.8 9.80531C10.6267 8.09865 11.4 6.81865 12.12 5.96531H0V4.28531H12.12C11.4 3.43198 10.6267 2.15198 9.8 0.445312H11.2C12.8533 2.39198 14.6133 3.83198 16.48 4.76531V5.48531C14.6133 6.39198 12.8533 7.83198 11.2 9.80531H9.8Z" fill="#6B8483"/>
                              </svg>
                              <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#2a6355] group-hover:text-white text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)] transition-colors duration-300">
                                {project.endDate}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="h-[75px] font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] group-hover:text-white text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [font-style:var(--body-1-font-style)] transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="px-2 py-1 rounded-md border-[#093532] group-hover:border-white bg-transparent transition-colors duration-300"
                          >
                            <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] group-hover:text-white text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] transition-colors duration-300">
                              {tag}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Other Projects */}
            <div className="flex flex-col items-start gap-6 w-full">
              <h3 className="font-h4 font-[number:var(--h4-font-weight)] text-[#179080] text-h4-mobile tablet:text-h4-tablet desktop:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                Other projects
              </h3>

              <div className="flex flex-wrap items-start gap-gap-mobile tablet:gap-gap-tablet desktop:gap-6 w-full">
                {otherProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="flex flex-col min-w-card-mobile tablet:min-w-card-tablet desktop:min-w-card-desktop max-w-card-mobile tablet:max-w-card-tablet desktop:max-w-card-desktop flex-1 bg-white rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[40px_40px_20px_20px] overflow-hidden border-2 border-solid border-[#f5f3ee] hover:border-[#093532] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="h-[150px] tablet:h-[200px] desktop:h-[234.81px] w-full overflow-hidden flex justify-center">
                      <img
                        className="w-full h-full object-cover group-hover:saturate-0 transition-all duration-300"
                        alt="Project image"
                        src={project.image}
                      />
                    </div>
                    <CardContent className="flex flex-col items-start gap-3 p-card-padding-mobile tablet:p-card-padding-tablet desktop:p-6 w-full -mt-4 tablet:-mt-6 desktop:-mt-7 bg-white group-hover:bg-[#093532] rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[20px_20px_0px_0px] transition-all duration-300">
                      <div className="flex flex-col items-start justify-center gap-2 pb-2 w-full">
                        <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#093532] group-hover:text-white text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)] transition-colors duration-300">
                          {project.org}
                        </div>
                        <h4 className="font-h5 font-[number:var(--h5-font-weight)] text-[#093532] group-hover:text-white text-h5-mobile tablet:text-h5-tablet desktop:text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--h5-font-style)] transition-colors duration-300">
                          {project.title}
                        </h4>
                        <div className="flex flex-wrap items-start gap-2 w-full">
                          <div className="flex items-center gap-2">
                            <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#6b8483] group-hover:text-white text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)] transition-colors duration-300">
                              {project.startDate}
                            </div>
                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:[&>path]:fill-white transition-all duration-300">
                              <path d="M9.8 9.80531C10.6267 8.09865 11.4 6.81865 12.12 5.96531H0V4.28531H12.12C11.4 3.43198 10.6267 2.15198 9.8 0.445312H11.2C12.8533 2.39198 14.6133 3.83198 16.48 4.76531V5.48531C14.6133 6.39198 12.8533 7.83198 11.2 9.80531H9.8Z" fill="#6B8483"/>
                            </svg>
                            <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#6b8483] group-hover:text-white text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)] transition-colors duration-300">
                              {project.endDate}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="px-2 py-1 rounded-md border-[#093532] group-hover:border-white bg-transparent transition-colors duration-300"
                          >
                            <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] group-hover:text-white text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] transition-colors duration-300">
                              {tag}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 w-full">
            <Pagination>
              <PaginationContent className="flex items-center gap-2">
                <PaginationItem>
                  <PaginationLink className="flex items-center justify-center w-[40px] tablet:w-[48px] desktop:w-[52px] h-auto p-2 bg-[#093532] rounded-lg border border-solid text-white font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-subtitle1-mobile tablet:text-subtitle1-tablet desktop:text-[length:var(--subtitle-1-font-size)] text-center tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
                    1
                  </PaginationLink>
                </PaginationItem>
                <div className="[font-family:'Noto_Sans_Mono_ExtraCondensed-Regular',Helvetica] font-normal text-[#093532] text-[20px] tablet:text-[24px] desktop:text-[28px] text-center tracking-[0] leading-[normal]">
                  ...
                </div>
                <PaginationItem>
                  <PaginationLink className="flex items-center justify-center w-[40px] tablet:w-[48px] desktop:w-[52px] h-auto p-2 rounded-lg border border-solid border-[#093532] text-[#093532] font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-subtitle1-mobile tablet:text-subtitle1-tablet desktop:text-[length:var(--subtitle-1-font-size)] text-center tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
                    10
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};