import React, { useEffect, useState } from "react";
import TitleHeading from "../utilities/TitleHeading";
import AvaterImg from "../../assets/image/natural01.jpg";
import { AddFriendIcon } from "../../assets/svg/AddFriendIcon";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const AllUser = () => {
  const user = useSelector((state) => state.signUpUser.value);
  const [users, setUsers] = useState([]);

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
      setUsers([...userList]);
    });
  }, [db]);

  const handleReq = (data) => {
    console.log(data);
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
        {users.map((item) => (
          <div className="flex items-center justify-between mt-2">
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
            <div onClick={() => handleReq(item)} className="cursor-pointer">
              <AddFriendIcon />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllUser;
