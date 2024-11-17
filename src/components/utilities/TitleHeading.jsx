import React from "react";

const TitleHeading = ({ content, className }) => {
  return (
    <h3 className={`text-3xl text-[#494949] font-inter_semiBold ${className}`}>
      {content}
    </h3>
  );
};

export default TitleHeading;
