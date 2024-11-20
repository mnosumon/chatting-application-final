import React from "react";

const TextRight = ({ item }) => {
  return (
    <p className="text-base font-inter_regular bg-blue-400 rounded-md p-2 text-justify w-fit">
      {item.content}
    </p>
  );
};

export default TextRight;
