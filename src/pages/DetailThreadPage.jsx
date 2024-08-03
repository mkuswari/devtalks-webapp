import React, { useEffect } from "react";
import CardThread from "../components/CardThread";
import CardUserInfo from "../components/CardUserInfo";
import CommentItem from "../components/CommentItem";
import CommentForm from "../components/CommentForm";
import { useNavigate, useParams } from "react-router-dom";
import ActionBack from "../components/ActionBack";
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownComment,
  asyncNeutralizeVoteComment,
} from "../states/threadDetail/action";
import { useDispatch, useSelector } from "react-redux";

const DetailThreadPage = () => {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  console.log(threadDetail);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

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
            <CardThread {...threadDetail} />
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl text-slate-800 font-light">
              {threadDetail?.comments?.length} Comments
            </h2>
            <div className="w-full p-5 rounded-xl border border-slate-200 bg-white mt-2">
              <CommentForm />
              {threadDetail?.comments?.map((comment) => {
                return <CommentItem key={comment.id} {...comment} />;
              })}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 mt-4 flex-shrink-0">
          <CardUserInfo
            name={threadDetail?.owner?.name}
            avatar={threadDetail?.owner?.avatar}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailThreadPage;
