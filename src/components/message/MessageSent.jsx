import React from "react";
import AvaterImg from "../../assets/image/natural01.jpg";
import { MicrophoneIcon } from "../../assets/svg/MicrophoneIcon";
import { EmojiIcon } from "../../assets/svg/EmojiIcon";
import { GellaryIcon } from "../../assets/svg/GellaryIcon";

const MessageSent = () => {
  return (
    <>
      <div className="flex gap-3 items-center bg-[#F9F9F9] px-3 py-2">
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={AvaterImg}
            alt="AvaterImg"
          />
        </div>
        <h2 className="font-inter_semiBold text-xl text-[#000]">Sumon</h2>
      </div>
      <div className="h-[500px]"></div>
      <div className="w-4/5 bg-[#F9F9F9] rounded-md mb-3 mx-auto grid grid-cols-[1fr,3fr,1fr] items-center gap-4 p-4">
        <div className=" flex items-center gap-3 ">
          <div className="cursor-pointer">
            <MicrophoneIcon />
          </div>
          <div className="cursor-pointer">
            <EmojiIcon />
          </div>
          <div className="cursor-pointer">
            <GellaryIcon />
          </div>
        </div>
        <div className=" font-inter_regular text-lg text-[#484848]">
          <input
            className="p-3 w-full border border-[#D8D8D8] outline-none rounded-md"
            type="text"
            placeholder="type here . . ."
          />
        </div>
        <button className=" bg-[#4A81D3] text-[#FFF] text-sm font-inter_medium p-3 rounded-md ">
          Send
        </button>
      </div>
    </>
  );
};

export default MessageSent;
