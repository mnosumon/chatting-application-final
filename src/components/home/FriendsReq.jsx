import React from "react";
import AvaterImg from "../../assets/image/natural01.jpg";
import TitleHeading from "../utilities/TitleHeading";

const FriendsReq = () => {
  return (
    <>
      <div className="mb-5">
        <TitleHeading content="Friend requests" />
      </div>

      <div className="flex items-center justify-between gap-2 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={AvaterImg}
              alt="AvaterImg"
            />
          </div>
          <h2 className="text-xl text-[#3D3C3C] font-inter_medium">
            Md Nuruddin Osman
          </h2>
        </div>
        <div className="cursor-pointer">
          <button className="bg-[#4A81D3] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md mr-1">
            Accept
          </button>
          <button className="bg-[#D34A4A] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md">
            Reject
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={AvaterImg}
              alt="AvaterImg"
            />
          </div>
          <h2 className="text-xl text-[#3D3C3C] font-inter_medium">
            Md Nuruddin Osman
          </h2>
        </div>
        <div className="cursor-pointer">
          <button className="bg-[#4A81D3] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md mr-1">
            Accept
          </button>
          <button className="bg-[#D34A4A] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md">
            Reject
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={AvaterImg}
              alt="AvaterImg"
            />
          </div>
          <h2 className="text-xl text-[#3D3C3C] font-inter_medium">
            Md Nuruddin Osman
          </h2>
        </div>
        <div className="cursor-pointer">
          <button className="bg-[#4A81D3] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md mr-1">
            Accept
          </button>
          <button className="bg-[#D34A4A] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md">
            Reject
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={AvaterImg}
              alt="AvaterImg"
            />
          </div>
          <h2 className="text-xl text-[#3D3C3C] font-inter_medium">
            Md Nuruddin Osman
          </h2>
        </div>
        <div className="cursor-pointer">
          <button className="bg-[#4A81D3] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md mr-1">
            Accept
          </button>
          <button className="bg-[#D34A4A] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md">
            Reject
          </button>
        </div>
      </div>
    </>
  );
};

export default FriendsReq;
