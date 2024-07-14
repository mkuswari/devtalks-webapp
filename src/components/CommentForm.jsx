import React, { useState } from "react";

const CommentForm = () => {
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
        <textarea
          placeholder="Add a comment..."
          className="w-full h-24 border border-slate-200 outline-none focus:outline-none p-4 rounded-xl text-sm text-slate-800"
        ></textarea>
        <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-xl">
          Send
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
