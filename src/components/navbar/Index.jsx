import React, { useState } from "react";
import { UploadIcon } from "../../assets/svg/UploadIcon";
import { HomeIcon } from "../../assets/svg/HomeIcon";
import { MessageIcon } from "../../assets/svg/MessageIcon";
import { BackSquerIcon } from "../../assets/svg/BackSquerIcon";
import AvaterImg from "../../assets/image/natural01.jpg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../../features/slice/registrationSlice";
import { getAuth, signOut } from "firebase/auth";
import Modal from "./modal/Modal";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);
  const user = useSelector((state) => state.signUpUser.value);

  const location = useLocation();

  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(signOutUser());
        localStorage.removeItem("user");
        navigate("/login");
      })
      .catch((error) => {});
  };
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 relative">
          <div className="w-full h-full rounded-full overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src={AvaterImg}
              alt="AvaterImg"
            />
            <div
              onClick={() => setModalShow(true)}
              className="absolute bottom-0 right-0 z-10 text-white cursor-pointer"
            >
              <UploadIcon />
            </div>
          </div>
        </div>
        <h2 className="font-inter_semiBold text-xl text-[#FFF] mt-3">
          {user.displayName}
        </h2>
      </div>
      <div className="flex flex-col gap-16 ">
        <div className="text-6xl text-white relative">
          <NavLink to="/">
            <HomeIcon />
          </NavLink>
          {location.pathname === "/" && (
            <div className="w-[12%] h-full bg-white absolute top-0 -right-[65%]"></div>
          )}
        </div>
        <div className="relative">
          <NavLink to="/message" className="text-6xl text-white ">
            <MessageIcon />
          </NavLink>
          {location.pathname === "/message" && (
            <div className="w-[12%] h-full bg-white absolute top-0 -right-[65%]"></div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-2xl text-white">
          <BackSquerIcon />
        </div>
        <button
          onClick={handleLogout}
          className="font-inter_semiBold text-xl text-[#FFF]"
        >
          Logout
        </button>
      </div>
      {modalShow &&
        createPortal(<Modal setModalShow={setModalShow} />, document.body)}
    </>
  );
};

export default Navbar;
