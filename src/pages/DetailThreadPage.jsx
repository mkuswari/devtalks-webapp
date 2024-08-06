import React, { useEffect } from "react";
import CardThread from "../components/CardThread";
import CardUserInfo from "../components/CardUserInfo";
import CommentItem from "../components/CommentItem";
import CommentForm from "../components/CommentForm";
import { Link, useNavigate, useParams } from "react-router-dom";
import ActionBack from "../components/ActionBack";
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncUpVoteComment,
  asyncDownComment,
  asyncNeutralizeVoteComment,
  asyncCreateComment,
} from "../states/threadDetail/action";
import { useDispatch, useSelector } from "react-redux";
import { CommentSection, HeaderTitle } from "../components";

const DetailThreadPage = () => {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  console.log(threadDetail);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const handleUpVoteThread = (id) => {
    console.log(id);
    dispatch(asyncUpVoteThreadDetail(id));
  };

  const handleDownVoteThread = (id) => {
    dispatch(asyncDownVoteThreadDetail(id));
  };

  const handleNeutralizeVoteThread = (id) => {
    dispatch(asyncNeutralizeVoteThreadDetail(id));
  };

  const handleSubmitComment = (content) => {
    dispatch(asyncCreateComment({ content }));
  };

  const handleUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const handleDownVoteComment = (id) => {
    dispatch(asyncDownComment(id));
  };

  const handleNeutralizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  return (
    <div className="container my-4">
      {/* action back */}
      <ActionBack navigate={() => navigate("/")} />
      <HeaderTitle subTitle="Detail Threads" />
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <div className="space-y-4 mt-4">
            <CardThread
              {...threadDetail}
              onUpVoteThread={() => handleUpVoteThread(threadDetail.id)}
              onDownVoteThread={() => handleDownVoteThread(threadDetail.id)}
              onNeutralizeVoteThread={() =>
                handleNeutralizeVoteThread(threadDetail.id)
              }
              showCommentStats={false}
            />
          </div>
          <CommentSection
            threadDetail={threadDetail}
            authUser={authUser}
            handleSubmitComment={handleSubmitComment}
            onUpVoteComment={handleUpVoteComment}
            onDownVoteComment={handleDownVoteComment}
            onNeutralizeVoteComment={handleNeutralizeVoteComment}
          />
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
