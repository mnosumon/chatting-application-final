import React from "react";

const TextRight = ({ item, formatDistance }) => {
  return (
    <>
      <p className="text-base font-inter_regular bg-blue-400 rounded-md p-2 text-justify w-fit">
        {item.content}
      </p>
      <span className="text-xs text-[#8c8a8a]">
        {formatDistance(item.date, new Date(), {
          addSuffix: true,
        })}
      </span>
    </>
  );
};

export default TextRight;
