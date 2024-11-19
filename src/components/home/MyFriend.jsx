import React, { useEffect, useState } from "react";
import AvaterImg from "../../assets/image/natural01.jpg";
import TitleHeading from "../utilities/TitleHeading";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const MyFriend = () => {
  const user = useSelector((state) => state.signUpUser.value);

  const [acceptalbeFriend, setAcceptalbeFriend] = useState([]);
  const db = getDatabase();
  useEffect(() => {
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      const friend = [];
      snapshot.forEach((item) => {
        if (
          user.uid === item.val().senderID ||
          item.val().recieverID === user.uid
        ) {
          friend.push({ ...item.val(), id: item.key });
        }
      });
      setAcceptalbeFriend(friend);
    });
  }, []);

  return (
    <>
      <div className="mb-5">
        <TitleHeading content="Friend requests" />
      </div>
      {acceptalbeFriend?.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-2 mt-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={AvaterImg}
                alt="AvaterImg"
              />
            </div>
            <h2 className="text-xl text-[#3D3C3C] font-inter_medium">
              {user.uid === item.senderID ? item.recieverName : item.senderName}
            </h2>
          </div>
          <div className="cursor-pointer">
            <button className="bg-[#4A81D3] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md mr-1">
              Unfriend
            </button>
            <button className="bg-[#D34A4A] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md">
              Block
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyFriend;
