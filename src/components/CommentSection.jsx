import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import LoginMessage from "./LoginMessage";
import CommentItem from "./CommentItem";

const CommentSection = ({
  threadDetail,
  authUser,
  handleSubmitComment,
  onUpVoteComment,
  onDownVoteComment,
  onNeutralizeVoteComment,
}) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl md:text-2xl text-slate-800 font-light">
        {threadDetail?.comments?.length} Comments
      </h2>
      <div className="w-full p-5 rounded-xl border border-slate-200 bg-white mt-2">
        {authUser ? (
          <CommentForm onAddComment={handleSubmitComment} />
        ) : (
          <LoginMessage />
        )}
        {threadDetail?.comments?.map((comment) => {
          return (
            <CommentItem
              key={comment?.id}
              {...comment}
              onUpVote={() => onUpVoteComment(comment?.id)}
              onDownVote={() => onDownVoteComment(comment?.id)}
              onNeutralizeVote={() => onNeutralizeVoteComment(comment?.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentSection;

CommentSection.propTypes = {
  threadDetail: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
  handleSubmitComment: PropTypes.func.isRequired,
  onUpVoteComment: PropTypes.func.isRequired,
  onDownVoteComment: PropTypes.func.isRequired,
  onNeutralizeVoteComment: PropTypes.func.isRequired,
};
