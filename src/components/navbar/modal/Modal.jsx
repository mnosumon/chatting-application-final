import React, { useRef, useState, createRef } from "react";
import TitleHeading from "../../utilities/TitleHeading";
import { GellaryIcon } from "../../../assets/svg/GellaryIcon";
import { IoMdCloseCircleOutline } from "react-icons/io";
import CropModal from "./CropModal";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { signInUser } from "../../../features/slice/registrationSlice";

const Modal = ({ setModalShow }) => {
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
  const user = useSelector((state) => state.signUpUser.value);
  const choesRef = useRef();
  const cropperRef = useRef();
  const auth = getAuth();
  const storage = getStorage();
  const storageRef = ref(storage, user.uid);
  const dispatch = useDispatch();

  // const uploadTask = uploadBytesResumable(storageRef, file);

  const handleChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const message4 = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          })
            .then(() => {
              dispatch(signInUser({ ...user, photoURL: downloadURL }));
              localStorage.setItem(
                "user",
                JSON.stringify({ ...user, photoURL: downloadURL })
              );
              setModalShow(false);
            })
            .catch((error) => {
              console.log(error.message);
            });
        });
      });
    }
  };

  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-[#8d88888d] flex items-center justify-center">
      <div className="w-[33%] bg-white rounded-md relative">
        <div
          onClick={() => setModalShow(false)}
          className="absolute right-1 top-1 text-2xl cursor-pointer"
        >
          <IoMdCloseCircleOutline />
        </div>

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
            <input onChange={handleChange} ref={choesRef} type="file" hidden />
          </div>
        </div>
      </div>
      {image && (
        <CropModal
          setImage={setImage}
          image={image}
          setCropData={setCropData}
          Cropper={Cropper}
          cropperRef={cropperRef}
          getCropData={getCropData}
        />
      )}
    </div>
  );
};

export default Modal;
