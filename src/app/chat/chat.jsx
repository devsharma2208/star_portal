import React from "react";
import CommentIcon from "@mui/icons-material/Comment";
const Chat = () => {
  return (
    <div className="fixed bottom-5 right-5 text-white z-30 ">
      <CommentIcon className="h-10 w-10 text-black bg-gray-100 cursor-pointer rounded-full p-2 hover:h-12 hover:w-12 transition-all duration-300" />
    </div>
  );
};

export default Chat;
