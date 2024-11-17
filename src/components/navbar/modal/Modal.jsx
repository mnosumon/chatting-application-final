import React, { useRef } from "react";
import TitleHeading from "../../utilities/TitleHeading";
import { GellaryIcon } from "../../../assets/svg/GellaryIcon";

const Modal = () => {
  const choesRef = useRef();

  return (
    <div className="w-full h-screen fixed bg-[#8d88888d] flex items-center justify-center">
      <div className="w-[33%] bg-white rounded-md">
        <TitleHeading className="text-center py-3" content="Upload photo" />
        <div className="border border-[#2d2d2d] rounded-md m-3">
          <div
            onClick={() => choesRef.current.click()}
            className="h-60 bg-slate-300 m-2 rounded-md flex items-center justify-center cursor-pointer"
          >
            <div className="">
              <div className="text-center flex items-center justify-center">
                <GellaryIcon />
              </div>
              <span>Choes your photo</span>
            </div>
            <input ref={choesRef} type="file" hidden />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
