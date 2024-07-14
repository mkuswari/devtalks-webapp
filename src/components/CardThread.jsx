import React from "react";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const CardThread = () => {
  return (
    <article className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-5">
      <div className="flex items-center gap-2">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <span className="block font-bold text-sm">John Doe</span>
          <span className="block font-medium text-slate-500 text-xs">
            3 Days ago
          </span>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-xl text-slate-800">
          Bagaimana Pengalamanmu Belajar Di Dicoding?
        </h1>
        <div className="inline-flex gap-1 mt-2">
          <span className="bg-indigo-500 px-2 py-0.5 text-xs rounded-full text-white">
            # Redux
          </span>
        </div>
        <div className="my-4 text-slate-500 text-sm">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facere
            laudantium deleniti unde dolorem cupiditate ipsum praesentium omnis
            nisi fugiat? Cupiditate, deleniti laborum? Nobis reiciendis officia
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
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
