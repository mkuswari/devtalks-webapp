import React from "react";
import ChipCategory from "./ChipCategory";
import postedAt from "../utils/posted-at";
import { useNavigate } from "react-router-dom";
import ActionVote from "./ActionVote";
import PropTypes from "prop-types";

const CardThread = ({
  id,
  threadOwner,
  owner,
  category,
  createdAt,
  title,
  body,
  upVotesBy,
  downVotesBy,
  totalComments,
  onUpVoteThread,
  onDownVoteThread,
  onNeutralizeVoteThread,
  showCommentStats,
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
          <ChipCategory name={category} activeCategory />
        </div>
        <div
          className="my-4 text-slate-500 text-sm"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
      <div className="mt-3">
        <ActionVote
          threadId={id}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          countComments={totalComments}
          onUpVoteThread={onUpVoteThread}
          onDownVoteThread={onDownVoteThread}
          onNeutralizeVoteThread={onNeutralizeVoteThread}
          showCommentStats={showCommentStats}
        />
      </div>
    </article>
  );
};

export default CardThread;

CardThread.propTypes = {
  id: PropTypes.string.isRequired,
  threadOwner: PropTypes.object.isRequired,
  owner: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  totalComments: PropTypes.array.isRequired,
  onUpVoteThread: PropTypes.func.isRequired,
  onDownVoteThread: PropTypes.func.isRequired,
  onNeutralizeVoteThread: PropTypes.func.isRequired,
  showCommentStats: PropTypes.bool.isRequired,
};
