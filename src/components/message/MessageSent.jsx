import React, { useEffect, useRef, useState } from "react";
import AvaterImg from "../../assets/image/natural01.jpg";
import { MicrophoneIcon } from "../../assets/svg/MicrophoneIcon";
import { EmojiIcon } from "../../assets/svg/EmojiIcon";
import { GellaryIcon } from "../../assets/svg/GellaryIcon";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import TextLeft from "./TextLeft";
import TextRight from "./TextRight";
import { formatDistance } from "date-fns";
import EmojiPicker from "emoji-picker-react";

const MessageSent = () => {
  const friend = useSelector((state) => state.singleFriend.value);
  const user = useSelector((state) => state.signUpUser.value);
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const [emojiShow, setEmojiShow] = useState(false);

  const scrollRef = useRef();
  const db = getDatabase();
  const time = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

  const handleSent = () => {
    if (text !== "") {
      if (friend?.status === "single") {
        set(push(ref(db, "message/")), {
          whoSenderID: user.uid,
          whoSenderName: user.displayName,
          whoRecieverID: friend.id,
          whoRecieverName: friend.name,
          content: text,
          date: time,
        });
      }
    }
    setText("");
  };

  useEffect(() => {
    const starCountRef = ref(db, "message/");
    onValue(starCountRef, (snapshot) => {
      const messageArr = [];
      snapshot.forEach((item) => {
        const datas = item.val();
        if (
          (datas.whoRecieverID === friend.id &&
            datas.whoSenderID === user.uid) ||
          (friend.id === datas.whoSenderID && user.uid === datas.whoRecieverID)
        ) {
          messageArr.push({ ...datas });
        }
      });
      setMessage(messageArr);
    });
  }, [user.uid, friend, db]);

  const handleEmojiPicker = (data) => {
    setText(data.emoji + text);
    setEmojiShow(false);
  };

  const handleEmojiShow = () => {
    setEmojiShow(!emojiShow);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSent();
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [message]);

  return (
    <>
      <div className="flex gap-3 items-center bg-[#F9F9F9] px-3 py-2">
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={AvaterImg}
            alt="AvaterImg"
          />
        </div>
        <h2 className="font-inter_semiBold text-xl text-[#000]">
          {friend?.name}
        </h2>
      </div>
      <div className="h-[500px] overflow-y-auto">
        {friend?.status === "single"
          ? message?.map((item, index) => (
              <div ref={scrollRef} key={index}>
                {friend?.id === item.whoSenderID &&
                user.uid === item.whoRecieverID ? (
                  <div className="w-3/5 mr-auto mt-2 mx-2">
                    <TextLeft item={item} formatDistance={formatDistance} />
                  </div>
                ) : (
                  <div className="w-3/5 ml-auto flex flex-col items-end mt-2 mx-2">
                    <TextRight item={item} formatDistance={formatDistance} />
                  </div>
                )}
              </div>
            ))
          : ""}
      </div>
      <div className="w-4/5 bg-[#F9F9F9] rounded-md mb-3 mx-auto grid grid-cols-[1fr,3fr,1fr] items-center gap-4 p-4">
        <div className=" flex items-center gap-3 ">
          <div className="cursor-pointer">
            <MicrophoneIcon />
          </div>
          <div className="cursor-pointer relative">
            <div onClick={handleEmojiShow} className="">
              <EmojiIcon />
            </div>
            {emojiShow && (
              <div className="absolute bottom-10 left-1">
                <EmojiPicker onEmojiClick={handleEmojiPicker} />
              </div>
            )}
          </div>
          <div className="cursor-pointer">
            <GellaryIcon />
          </div>
        </div>
        <div className=" font-inter_regular text-lg text-[#484848]">
          <textarea
            onKeyUp={handleEnter}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-3 w-full border border-[#D8D8D8] outline-none rounded-md resize-none overflow-hidden"
            type="text"
            placeholder="type here . . ."
            name="sms"
            id="sms"
          />
        </div>
        <button
          onClick={handleSent}
          className=" bg-[#4A81D3] text-[#FFF] text-sm font-inter_medium p-3 rounded-md "
        >
          Send
        </button>
      </div>
    </>
  );
};

export default MessageSent;
