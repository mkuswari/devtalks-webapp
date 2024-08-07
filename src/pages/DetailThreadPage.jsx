import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardThread from "../components/CardThread";
import CardUserInfo from "../components/CardUserInfo";
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
import { CommentSection, HeaderTitle } from "../components";

const DetailThreadPage = () => {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const handleUpVoteThread = (threadId) => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const handleDownVoteThread = (threadId) => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const handleNeutralizeVoteThread = (threadId) => {
    dispatch(asyncNeutralizeVoteThreadDetail(threadId));
  };

  const handleSubmitComment = (content) => {
    dispatch(asyncCreateComment({ content }));
  };

  const handleUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment(commentId));
  };

  const handleDownVoteComment = (commentId) => {
    dispatch(asyncDownComment(commentId));
  };

  const handleNeutralizeVoteComment = (commentId) => {
    dispatch(asyncNeutralizeVoteComment(commentId));
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
