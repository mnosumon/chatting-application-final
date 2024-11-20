import React, { useEffect, useState } from "react";
import AvaterImg from "../../assets/image/natural01.jpg";
import TitleHeading from "../utilities/TitleHeading";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { singleFriend } from "../../features/slice/sentMessageSlice";
import { useLocation } from "react-router-dom";

const MyFriend = () => {
  const user = useSelector((state) => state.signUpUser.value);

  const [acceptalbeFriend, setAcceptalbeFriend] = useState([]);
  const [activeFriend, setActiveFriend] = useState();
  const db = getDatabase();
  const dispatch = useDispatch();
  const location = useLocation();

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

  const handleMessageSelect = (data) => {
    if (user.uid === data.senderID) {
      dispatch(
        singleFriend({
          status: "single",
          id: data.recieverID,
          name: data.recieverName,
        })
      );
      localStorage.setItem(
        "message",
        JSON.stringify({
          status: "single",
          id: data.recieverID,
          name: data.recieverName,
        })
      );
    } else {
      dispatch(
        singleFriend({
          status: "single",
          id: data.senderID,
          name: data.senderName,
        })
      );
      localStorage.setItem(
        "message",
        JSON.stringify({
          status: "single",
          id: data.senderID,
          name: data.senderName,
        })
      );
    }
    setActiveFriend(data.id);
  };

  return (
    <>
      <div className="mb-5">
        <TitleHeading content="Friend requests" />
      </div>
      {acceptalbeFriend?.map((item) => (
        <div
          onClick={() => handleMessageSelect(item)}
          key={item.id}
          className={`flex items-center justify-between gap-2 mt-2 rounded-md px-2 py-1 hover:bg-green-400 transition-all duration-200 ${
            location.pathname == "/message" && activeFriend === item.id
              ? "bg-green-400"
              : ""
          }`}
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
