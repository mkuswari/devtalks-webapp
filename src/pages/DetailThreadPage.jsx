import React from "react";
import CardThread from "../components/CardThread";
import CardUserInfo from "../components/CardUserInfo";
import CommentItem from "../components/CommentItem";
import CommentForm from "../components/CommentForm";
import { useNavigate } from "react-router-dom";
import ActionBack from "../components/ActionBack";

const DetailThreadPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-4">
      {/* action back */}
      <ActionBack navigate={() => navigate("/")} />
      <div className="p-2">
        <h2 className="text-xl md:text-2xl text-slate-800 font-light">
          Detail Thread
        </h2>
      </div>
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <div className="space-y-4 mt-4">
            <CardThread />
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl text-slate-800 font-light">
              0 Comments
            </h2>
            <div className="w-full p-5 rounded-xl border border-slate-200 bg-white mt-2">
              <CommentForm />
              <CommentItem />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 mt-4 flex-shrink-0">
          <CardUserInfo />
        </div>
      </div>
    </div>
  );
};

export default DetailThreadPage;
