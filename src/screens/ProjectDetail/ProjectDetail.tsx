import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { FooterSection } from "../Desktop/sections/FooterSection";

export const ProjectDetail = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: id,
    image: "/hypercert.webp",
    org: "[Name of the org]",
    title: "Tamagochi at Riverside",
    startDate: "2024/10/09",
    endDate: "2024/10/9",
    description: "FAB DAO，全名 Formosa Art Bank DAO，為公益 NFT 自治組織，集結跨域組織與個人，開創臺灣 NFT 結合公益、藝術、文化的新篇章。感謝Yii慷慨捐贈群島資料庫 No.1~10給FAB DAO藝術銀行。",
    fullDescription: "FAB DAO，全名 Formosa Art Bank DAO，為公益 NFT 自治組織，集結跨域組織與個人，開創臺灣 NFT 結合公益、藝術、文化的新篇章。\n\n感謝Yii慷慨捐贈群島資料庫 No.1~10給FAB DAO藝術銀行，這些作品將成為我們藝術收藏的重要組成部分。透過區塊鏈技術，我們能夠確保藝術品的真實性和所有權記錄。\n\n本專案旨在推動台灣本土藝術的數位化保存與推廣，同時建立一個去中心化的藝術生態系統，讓更多人能夠參與藝術創作和收藏的過程。",
    tags: ["FABDAO", "ART", "NFT", "BLOCKCHAIN"],
    hypercertUrl: "https://hypercerts.org/app/view#claimId=0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-442341478564487395328",
    contributors: [
      { name: "Alice Chen", role: "Project Lead" },
      { name: "Bob Wang", role: "Artist" },
      { name: "Carol Liu", role: "Developer" },
      { name: "David Zhang", role: "Community Manager" }
    ],
    impact: {
      artworksDonated: 10,
      communityMembers: 156,
      totalValue: "$12,500"
    }
  };

  return (
    <div className="w-full bg-[#F5F3EE] min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Navigation Header */}
        <div className="flex items-center gap-4 pt-6 pb-4 px-4 tablet:px-8 desktop:px-10">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#093532] hover:text-[#179080] hover:bg-transparent p-0"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[length:var(--subtitle-1-font-size)]">
              Back to Projects
            </span>
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-8 tablet:gap-12 desktop:gap-16 px-4 tablet:px-8 desktop:px-10 pb-[120px]">
          {/* Hero Section */}
          <div className="flex flex-col desktop:flex-row gap-8 desktop:gap-12">
            {/* Project Image */}
            <div className="flex-1 max-w-[600px]">
              <div 
                className="w-full h-[300px] tablet:h-[400px] desktop:h-[500px] rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[40px] overflow-hidden"
                style={{ background: `url(${project.image}) lightgray top / cover no-repeat` }}
              />
            </div>

            {/* Project Info */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#6b8483] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                  {project.org}
                </div>
                <h1 className="font-h2 font-[number:var(--h2-font-weight)] text-[#093532] text-h2-mobile tablet:text-h2-tablet desktop:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                  {project.title}
                </h1>
                
                {/* Timeline */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                    Timeline
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#2a6355] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                      {project.startDate}
                    </div>
                    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.8 9.80531C10.6267 8.09865 11.4 6.81865 12.12 5.96531H0V4.28531H12.12C11.4 3.43198 10.6267 2.15198 9.8 0.445312H11.2C12.8533 2.39198 14.6133 3.83198 16.48 4.76531V5.48531C14.6133 6.39198 12.8533 7.83198 11.2 9.80531H9.8Z" fill="#6B8483"/>
                    </svg>
                    <div className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[#2a6355] text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
                      {project.endDate}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-start gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-3 py-1 rounded-md border-[#093532] bg-transparent"
                    >
                      <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                        {tag}
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Hypercert Link */}
              <Card className="bg-white rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[20px] p-6">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-h5 font-[number:var(--h5-font-weight)] text-[#093532] text-h5-mobile tablet:text-h5-tablet desktop:text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
                      View Hypercert
                    </h3>
                    <p className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                      View this project's impact certificate on the Hypercerts platform
                    </p>
                    <Button
                      asChild
                      className="w-fit bg-[#179080] hover:bg-[#093532] text-white rounded-lg px-6 py-3"
                    >
                      <a
                        href={project.hypercertUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-[length:var(--subtitle-2-font-size)]">
                          View Hypercert
                        </span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Project Description */}
          <Card className="bg-white rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[40px] p-card-padding-mobile tablet:p-card-padding-tablet desktop:p-8">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6">
                <h2 className="font-h4 font-[number:var(--h4-font-weight)] text-[#093532] text-h4-mobile tablet:text-h4-tablet desktop:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  About This Project
                </h2>
                <div className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#093532] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] whitespace-pre-line">
                  {project.fullDescription}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Metrics */}
          <Card className="bg-white rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[40px] p-card-padding-mobile tablet:p-card-padding-tablet desktop:p-8">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6">
                <h2 className="font-h4 font-[number:var(--h4-font-weight)] text-[#093532] text-h4-mobile tablet:text-h4-tablet desktop:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  Project Impact
                </h2>
                <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="font-h4 font-[number:var(--h4-font-weight)] text-[#179080] text-h4-mobile tablet:text-h4-tablet desktop:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                      {project.impact.artworksDonated}
                    </div>
                    <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
                      Artworks Donated
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-h4 font-[number:var(--h4-font-weight)] text-[#179080] text-h4-mobile tablet:text-h4-tablet desktop:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                      {project.impact.communityMembers}
                    </div>
                    <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
                      Community Members
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-h4 font-[number:var(--h4-font-weight)] text-[#179080] text-h4-mobile tablet:text-h4-tablet desktop:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                      {project.impact.totalValue}
                    </div>
                    <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
                      Total Value
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contributors */}
          <Card className="bg-white rounded-card-mobile tablet:rounded-card-tablet desktop:rounded-[40px] p-card-padding-mobile tablet:p-card-padding-tablet desktop:p-8">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6">
                <h2 className="font-h4 font-[number:var(--h4-font-weight)] text-[#093532] text-h4-mobile tablet:text-h4-tablet desktop:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  Contributors
                </h2>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                  {project.contributors.map((contributor, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <div className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
                        {contributor.name}
                      </div>
                      <div className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                        {contributor.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};