import React from "react";

export const FooterSection = (): JSX.Element => {
  // Social links data for easy mapping
  const socialLinks = [
    {
      name: "DISCORD",
      url: "https://discord.gg/R5tfebnnpm",
    },
    {
      name: "X / Twitter",
      url: "https://x.com/GreenSofa_TW",
    },
    {
      name: "HACKMD",
      url: "https://hackmd.io/@greensofa/home",
    },
  ];

  return (
    <footer className="flex flex-col w-full items-center gap-gap-mobile tablet:gap-gap-tablet desktop:gap-8 pt-8 tablet:pt-10 desktop:pt-12 pb-6 tablet:pb-8 px-4 tablet:px-8 desktop:px-10 bg-[#093532]">
      <div className="flex flex-col tablet:flex-row w-full max-w-[1360px] items-start justify-between gap-8 tablet:gap-[64px_132px] pt-0 pb-8 tablet:pb-12 px-0 border-b border-[#6b8483]">
        <img className="w-[180px] tablet:w-[200px] desktop:w-[236px]" alt="Logo" src="/Logo_en.svg" />

        <div className="flex flex-col w-full tablet:w-52 items-start justify-center gap-4 tablet:gap-6">
          <h3 className="w-fit mt-[-1.00px] font-h5 font-[number:var(--h5-font-weight)] text-white text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
            Contact
          </h3>

          <div className="flex flex-col items-start justify-center gap-3 tablet:gap-4">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="w-fit [font-family:'Poppins',Helvetica] font-normal text-white text-sm tablet:text-base tracking-[0] leading-4"
              >
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-[number:var(--subtitle-2-font-weight)] underline font-subtitle-2 [font-style:var(--subtitle-2-font-style)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] text-[length:var(--subtitle-2-font-size)]"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col tablet:flex-row w-full max-w-[1360px] items-start justify-between gap-4 tablet:gap-[8px_24px]">
        <div className="inline-flex items-center gap-2">
          <p className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tablet:text-base tracking-[0] leading-[normal]">
            Powered by
          </p>
          <img
            className="w-[120px] tablet:w-[138.07px] h-4 tablet:h-5"
            alt="FAB DAO logo"
            src="/Fabdao-logo.png"
          />
        </div>

        <p className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-xs tablet:text-sm tracking-[0] leading-[normal]">
          ©FAB DAO. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
