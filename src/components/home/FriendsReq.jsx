import React, { useEffect, useState } from "react";
import AvaterImg from "../../assets/image/natural01.jpg";
import TitleHeading from "../utilities/TitleHeading";
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
} from "firebase/database";
import { useSelector } from "react-redux";

const FriendsReq = () => {
  const user = useSelector((state) => state.signUpUser.value);

  const [requestFriendList, setRequestFriendList] = useState([]);
  const db = getDatabase();
  useEffect(() => {
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      const requestFriend = [];
      snapshot.forEach((item) => {
        const datas = item.val();
        if (user.uid === datas.recieverID) {
          requestFriend.push({ ...datas, id: item.key });
        }
      });
      setRequestFriendList(requestFriend);
    });
  }, [db, user.uid]);

  const handleFriends = (data) => {
    set(push(ref(db, "friends/")), {
      ...data,
    }).then(() => {
      remove(ref(db, "friendRequest/" + data.id));
    });
  };

  const handleFriendRemove = (data) => {
    remove(ref(db, "friendRequest/" + data.id));
  };

  return (
    <>
      <div className="mb-5">
        <TitleHeading content="Friend requests" />
      </div>
      {requestFriendList.map((item) => (
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
              {item.recieverID === user.uid && item.senderName}
            </h2>
          </div>
          <div className="cursor-pointer">
            <button
              onClick={() => handleFriends(item)}
              className="bg-[#4A81D3] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md mr-1"
            >
              Accept
            </button>
            <button
              onClick={() => handleFriendRemove(item)}
              className="bg-[#D34A4A] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendsReq;
