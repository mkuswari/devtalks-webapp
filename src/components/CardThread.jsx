import React from "react";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import ChipCategory from "./ChipCategory";
import parse from "html-react-parser";
import postedAt from "../utils/posted-at";
import { useNavigate } from "react-router-dom";

const CardThread = ({
  id,
  threadOwner,
  owner,
  category,
  createdAt,
  title,
  body,
}) => {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <article className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-5">
      <div className="flex items-center gap-2">
        <img
          src={threadOwner?.avatar || owner?.avatar}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <span className="block font-bold text-sm">
            {threadOwner?.name || owner?.name}
          </span>
          <span className="block font-medium text-slate-500 text-xs">
            {postedAt(createdAt)}
          </span>
        </div>
      </div>
      <div className="mt-3">
        <h1
          className="text-xl text-slate-800 cursor-pointer"
          onClick={onThreadClick}
        >
          {title}
        </h1>
        <div className="inline-flex gap-1 mt-2">
          <ChipCategory name={category} />
        </div>
        <div
          className="my-4 text-slate-500 text-sm"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
      <div className="mt-3">
        <div className="inline-flex gap-4">
          <div className="flex items-center gap-1 text-slate-700 cursor-pointer">
            <AiFillLike />
            <span className="text-sm">1</span>
          </div>
          <div className="flex items-center gap-1 text-slate-700 cursor-pointer">
            <AiOutlineDislike />
            <span className="text-sm">0</span>
          </div>
          <div className="flex items-center gap-1 text-slate-700 cursor-pointer">
            <FaComment />
            <span className="text-sm">2</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardThread;
