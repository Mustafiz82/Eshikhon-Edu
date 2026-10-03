import React from "react";

const Title = ({title , desc}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl pt-5 sm:text-4xl md:text-5xl font-extrabold font-HindSiliguri text-[#0C2340] tracking-tight leading-[1.15] text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
        {title}
      </h2>

      <p className="text-slate-600 pt-1 text-sm sm:text-base leading-relaxed ">
      {desc}
      </p>
    </div>
  );
};

export default Title;
