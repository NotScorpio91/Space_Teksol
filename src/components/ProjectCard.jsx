import React from "react";

const ProjectCard = ({ src, title, description,link,main }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-50 hover:scale-105 transition-all ">
     <a href={link} target={main}>
      <img
        src={src}
        alt={title}
        className="w-full object-contain"
        width={1000}
        height={1000}
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      </a>
    </div>
  );
};

export default ProjectCard;
