import React from "react";
import { AiFillLike, AiOutlineDislike } from "react-icons/ai";

const CommentItem = () => {
  return (
    <div className="flex">
      <div className="p-2">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          alt=""
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex-1 p-2">
        <div className="rounded-md border border-slate-300 p-4">
          <p className="mb-3 text-sm text-slate-700">
            <span className="font-bold">Messi</span>
            <span> , 3 days ago</span>
          </p>
          <div className="my-2 text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="inline-flex gap-4">
            <div className="flex items-center gap-1 text-slate-700 cursor-pointer">
              <AiFillLike />
              <span className="text-sm">1</span>
            </div>
            <div className="flex items-center gap-1 text-slate-700 cursor-pointer">
              <AiOutlineDislike />
              <span className="text-sm">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
