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
    title: "Tamagochi at Riverside",
    timeOfWork: "Oct. 09, 2024 → Dec. 09, 2024",
    projectTitle: "Tamagochi at Riverside",
    timeline: "March 2023 – December 2023",
    location: "Huangxi River Corridor, Tianmu District, Taipei City, Taiwan",
    summary: "This project combines environmental education with Web3 tools to reconnect urban residents with the Huangxi River(Formal name: Southern Sulfur creek) in Taipei. In partnership with Formosa Art Bank DAO (FAB DAO), the Huangxi...",
    exploreUrl: "https://hypercerts.org/app/view#claimId=0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-442341478564487395328",
    verifiedBy: "0x2914...29D2rg",
    verifiedOn: "May 01, 2025",
    tags: ["FABDAO", "ART"]
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
        {/* Hero Image */}
        <div className="w-full h-[400px] tablet:h-[500px] desktop:h-[600px] relative overflow-hidden">
          <div 
            className="w-full h-full"
            style={{ 
              background: `linear-gradient(135deg, #A8E6CF 0%, #88D8A3 100%), url(${project.image}) center/cover no-repeat`,
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Logo overlay */}
            <div className="absolute top-8 left-8">
              <div className="w-16 h-16 bg-[#179080] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#179080] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-t-[40px] -mt-10 relative z-10 px-4 tablet:px-8 desktop:px-10 pt-12 pb-[120px]">
          {/* Project Info */}
          <div className="flex flex-col gap-8 max-w-4xl">
            <div className="flex flex-col gap-6">
              <h1 className="font-h2 font-[number:var(--h2-font-weight)] text-[#093532] text-h2-mobile tablet:text-h2-tablet desktop:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                {project.title}
              </h1>
              
              {/* Time of work */}
              <div className="flex items-center gap-3">
                <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[#6b8483] text-[length:var(--body-1-font-size)]">
                  Time of work
                </span>
                <span className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#093532] text-[length:var(--subtitle-1-font-size)]">
                  {project.timeOfWork}
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 bg-[#6b8483] rounded-full flex items-center justify-center hover:bg-[#093532] transition-colors">
                  <Globe className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-[#6b8483] rounded-full flex items-center justify-center hover:bg-[#093532] transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-[#6b8483] rounded-full flex items-center justify-center hover:bg-[#093532] transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-4 text-[#093532]">
                <div>
                  <span className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[length:var(--subtitle-1-font-size)]">
                    Project Title: 
                  </span>
                  <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] ml-2">
                    {project.projectTitle}
                  </span>
                </div>
                <div>
                  <span className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[length:var(--subtitle-1-font-size)]">
                    Timeline: 
                  </span>
                  <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] ml-2">
                    {project.timeline}
                  </span>
                </div>
                <div>
                  <span className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[length:var(--subtitle-1-font-size)]">
                    Location: 
                  </span>
                  <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] ml-2">
                    {project.location}
                  </span>
                </div>
                <div>
                  <span className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[length:var(--subtitle-1-font-size)]">
                    Summary and Quantifiable results : 
                  </span>
                  <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] ml-2">
                    {project.summary}
                  </span>
                </div>
              </div>

              {/* Read More Button */}
              <button className="text-[#179080] font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[length:var(--subtitle-1-font-size)] text-left hover:text-[#093532] transition-colors">
                READ MORE
              </button>

              {/* Divider */}
              <div className="w-full h-px bg-[#e5e5e5] my-4"></div>

              {/* Hypercert Info */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-6 text-[#6b8483]">
                  <div className="flex items-center gap-2">
                    <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)]">
                      View on
                    </span>
                    <a 
                      href={project.exploreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#179080] text-[length:var(--subtitle-1-font-size)] hover:text-[#093532] transition-colors flex items-center gap-1"
                    >
                      Explore
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)]">
                      Verified by
                    </span>
                    <span className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#179080] text-[length:var(--subtitle-1-font-size)]">
                      {project.verifiedBy}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)]">
                      Verified on
                    </span>
                    <span className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[length:var(--subtitle-1-font-size)]">
                      {project.verifiedOn}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-start gap-3">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 rounded-full border-[#093532] bg-transparent hover:bg-[#093532] hover:text-white transition-colors"
                    >
                      <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)]">
                        {tag}
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 tablet:px-8 desktop:px-10 pb-[120px]">

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
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};