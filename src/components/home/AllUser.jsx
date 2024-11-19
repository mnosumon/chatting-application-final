import React, { useEffect, useState } from "react";
import TitleHeading from "../utilities/TitleHeading";
import AvaterImg from "../../assets/image/natural01.jpg";
import { AddFriendIcon } from "../../assets/svg/AddFriendIcon";
import { useSelector } from "react-redux";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";

const AllUser = () => {
  const user = useSelector((state) => state.signUpUser.value);
  const [users, setUsers] = useState([]);
  const [friendReqList, setFriendReqList] = useState([]);
  const [cancelReq, setCancelReq] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const userList = [];
      snapshot.forEach((item) => {
        userList.push({
          ...item.val(),
          id: item.key,
        });
      });
      setUsers(userList);
    });
  }, [db]);
  const findUser = users.filter((item) => item.id !== user.uid);

  const handleReq = (data) => {
    set(push(ref(db, "friendRequest/")), {
      senderID: user.uid,
      senderName: user.displayName,
      recieverID: data.id,
      recieverName: data.name,
    });
  };

  useEffect(() => {
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      const requestFiend = [];
      snapshot.forEach((item) => {
        const datas = item.val();
        requestFiend.push(datas.senderID + datas.recieverID);
      });
      setFriendReqList(requestFiend);
    });
  }, [db]);

  useEffect(() => {
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      const cancelFriend = [];
      snapshot.forEach((item) => {
        cancelFriend.push({ ...item.val(), id: item.key });
      });
      setCancelReq(cancelFriend);
    });
  }, [db]);

  const handleCancelReq = (data) => {
    const cancelReqFilter = cancelReq.find(
      (item) => item.recieverID === data.id && item.senderID === user.uid
    );
    console.log(cancelReqFilter);

    if (cancelReqFilter) {
      remove(ref(db, "friendRequest/" + cancelReqFilter.id));
    }
  };

  return (
    <>
      <div className="px-3">
        <TitleHeading content="All user" />
      </div>
      <div className="px-3">
        <div className="my-3 ">
          <input
            className="w-full p-3 bg-[#F8F8F8]  outline-none rounded-md"
            type="text"
            placeholder="Search user..."
          />
        </div>
        {findUser.map((item) => (
          <div key={item.id} className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={AvaterImg}
                  alt="AvaterImg"
                />
              </div>
              <h2 className="text-2xl text-[#3D3C3C] font-inter_medium">
                {item.name}
              </h2>
            </div>
            {friendReqList.includes(user.uid + item.id) ||
            friendReqList.includes(item.id + user.uid) ? (
              <button
                onClick={() => handleCancelReq(item)}
                className="bg-[#4A81D3] text-[#FFF] text-sm font-inter_medium px-5 py-2 rounded-md mr-1"
              >
                Cancel Request
              </button>
            ) : (
              <div onClick={() => handleReq(item)} className="cursor-pointer">
                <AddFriendIcon />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AllUser;
