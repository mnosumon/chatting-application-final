import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CropModal = ({ Cropper, cropperRef, image, getCropData }) => {
  return (
    <div className="w-full h-screen fixed bg-[#8d88888d] flex items-center justify-center">
      <div className="w-[33%] bg-white rounded-md">
        <div className="relative my-4">
          <div className="w-20 h-20 overflow-hidden rounded-full mx-auto">
            <div className="img-preview w-full h-full object-cover" />
          </div>
          <div className="absolute right-1 top-1 text-2xl cursor-pointer">
            <IoMdCloseCircleOutline />
          </div>
        </div>

        <div className="m-3">
          <div className="border border-[#2d2d2d] h-full w-full rounded-md">
            <Cropper
              ref={cropperRef}
              style={{ height: 400, width: "100%" }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              guides={true}
            />
          </div>
          <button
            onClick={getCropData}
            className="text-[#FFFFFF] mt-2 w-full bg-[#313131] py-4 rounded-md font-inter_medium"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropModal;
