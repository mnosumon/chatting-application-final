import React from "react";
import AllUser from "../../components/home/AllUser";
import FriendsReq from "../../components/home/FriendsReq";
import MyFriend from "../../components/home/MyFriend";

const Home = () => {
  return (
    <div className="m-3 grid grid-cols-[1fr,2fr] gap-8">
      <div className="p-4 shadow-md rounded-md">
        <AllUser />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="px-4 shadow-md rounded-md h-fit py-3">
          <FriendsReq />
        </div>
        <div className="px-4 shadow-md rounded-md h-fit py-3">
          <MyFriend />
        </div>
      </div>
    </div>
  );
};

export default Home;
