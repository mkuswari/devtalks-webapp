import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import postedAt from "../utils/posted-at";

const CommentItem = ({
  content,
  owner,
  createdAt,
  upVotesBy,
  downVotesBy,
  onUpVote,
  onDownVote,
  onNeutralizeVote,
}) => {
  const { authUser = null } = useSelector((states) => states);

  const upVote = upVotesBy?.includes(authUser?.id);
  const downVote = downVotesBy?.includes(authUser?.id);

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
            <span className="font-bold">{owner?.name}</span>
            <span> , {postedAt(createdAt)}</span>
          </p>
          <div
            className="my-2 text-sm text-slate-500"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="inline-flex gap-4">
            <div
              className="flex items-center gap-1 text-slate-700 cursor-pointer"
              onClick={upVote ? onNeutralizeVote : onUpVote}
            >
              {upVote ? <AiFillLike /> : <AiOutlineLike />}
              <span className="text-sm">{upVotesBy?.length}</span>
            </div>
            <div
              className="flex items-center gap-1 text-slate-700 cursor-pointer"
              onClick={downVote ? onNeutralizeVote : onDownVote}
            >
              {downVote ? <AiFillDislike /> : <AiOutlineDislike />}
              <span className="text-sm">{downVotesBy?.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

CommentItem.propTypes = {
  content: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onNeutralizeVote: PropTypes.func.isRequired,
};
