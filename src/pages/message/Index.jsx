import React from "react";
import MyFriend from "../../components/home/MyFriend";
import MessageSent from "../../components/message/MessageSent";

const Message = () => {
  return (
    <div className="m-3 grid grid-cols-[1fr,2fr] gap-8">
      <div className="px-4 shadow-md rounded-md h-fit py-3">
        <MyFriend />
      </div>
      <div className="shadow-md rounded-md mx-3">
        <MessageSent />
      </div>
    </div>
  );
};

export default Message;
