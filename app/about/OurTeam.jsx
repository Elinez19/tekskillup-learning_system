"use client";

import { teamMembers, teamSocialIcons } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const OurTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section className="text-center flex-center flex-col padding-x md:py-20 py-8">
      <h2 className="mb-3 font-bold md:text-4xl text-[1.3rem]">Our Leadership Teams</h2>
      <p className=" text-[#59595A] md:w-[80%] lg:text-xl md:text-[.95rem] text-[0.8rem] lg:leading-[1.875rem]">
        With over 100 years or combined experience, we&apos;ve got a well-seasoned
        team at the helm.
      </p>
      <div className="flex-between lg:gap-[2.5rem] md:gap-[1.5rem] mt-32 md:flex-nowrap flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative md:w-[25%] w-[47%] mb-[7rem] bg-white"
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}>
            <div
              className="w-full sm:h-[13rem] h-[9rem] flex-center"
              style={{ backgroundColor: member.backgroundColor }}>
              <Image
                src={member.imgUrl}
                alt={member.imgAlt}
                width={500}
                height={500}
                className=" relative sm:-top-10 -top-6 sm:h-[18rem] h-[12rem] object-cover"
              />
            </div>
            <h3 className="font-bold lg:text-xl sm:text-[1rem] text-[.65rem] md:mt-5 mt-2">{member.name}</h3>
            <p className="lg:text-[.7rem] sm:text-[0.65rem] text-[0.5rem] font-semibold">{member.position}</p>
            
            <div
              className="absolute sm:-top-20 -top-12 flex-center flex-col text-center bg-[rgba(0,0,0,0.6)] w-[100%] sm:h-[22rem] h-[14rem] px-5 text-white"
              style={{
                opacity: hoveredMember === index ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}>
              <p className="md:text-base sm:text-[0.85rem] text-[0.6rem]">{member.bio}</p>
              <div className="flex-center gap-2 mt-8">
                {teamSocialIcons.map((icon) => (
                  <div key={icon.key} className=" rounded-full md:scale-95 scale-75 md:p-2 p-[5px] hover:cursor-pointer md:hover:scale-110 hover:scale-90 transition-all"
                  style={{ backgroundColor: member.backgroundColor }}>
                   <a href={member.socials[icon.key]} >
                      {icon.icon}
                    </a> 
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;