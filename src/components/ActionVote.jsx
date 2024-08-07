import {
  AiFillDislike,
  AiFillLike,
  AiFillMessage,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ActionVote = ({
  upVotesBy,
  downVotesBy,
  countComments,
  onUpVoteThread,
  onDownVoteThread,
  onNeutralizeVoteThread,
  showCommentStats,
}) => {
  const { authUser = null } = useSelector((states) => states);

  const upVote = upVotesBy?.includes(authUser?.id);
  const downVote = downVotesBy?.includes(authUser?.id);

  return (
    <div className="inline-flex gap-4">
      <div
        className="flex items-center gap-1 text-slate-700 cursor-pointer"
        onClick={upVote ? onNeutralizeVoteThread : onUpVoteThread}
      >
        {upVote ? <AiFillLike /> : <AiOutlineLike />}
        <span className="text-sm">{upVotesBy?.length}</span>
      </div>
      <div
        className="flex items-center gap-1 text-slate-700 cursor-pointer"
        onClick={downVote ? onNeutralizeVoteThread : onDownVoteThread}
      >
        {downVote ? <AiFillDislike /> : <AiOutlineDislike />}
        <span className="text-sm">{downVotesBy?.length}</span>
      </div>
      {showCommentStats && (
        <div className="flex items-center gap-1 text-slate-700">
          <AiFillMessage />
          <span className="text-sm">{countComments}</span>
        </div>
      )}
    </div>
  );
};

export default ActionVote;

ActionVote.propTypes = {
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  countComments: PropTypes.number.isRequired,
  onUpVoteThread: PropTypes.func.isRequired,
  onDownVoteThread: PropTypes.func.isRequired,
  onNeutralizeVoteThread: PropTypes.func.isRequired,
  showCommentStats: PropTypes.bool.isRequired,
};
