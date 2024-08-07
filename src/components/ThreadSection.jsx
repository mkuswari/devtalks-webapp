import PropTypes from "prop-types";
import CardThread from "./CardThread";

const ThreadSection = ({
  threadList,
  handleUpVoteThread,
  handleDownVoteThread,
  handleNeutralizeVoteThread,
}) => {
  return (
    <div className="space-y-4 mt-4">
      {threadList.map((thread) => (
        <CardThread
          key={thread.id}
          {...thread}
          onDownVoteThread={() => handleDownVoteThread(thread.id)}
          onUpVoteThread={() => handleUpVoteThread(thread.id)}
          onNeutralizeVoteThread={() => handleNeutralizeVoteThread(thread.id)}
          showCommentStats
        />
      ))}
    </div>
  );
};

export default ThreadSection;

ThreadSection.defaultProps = {
  threadList: [],
  handleUpVoteThread: () => {},
  handleDownVoteThread: () => {},
  handleNeutralizeVoteThread: () => {},
};

ThreadSection.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.object),
  handleUpVoteThread: PropTypes.func,
  handleDownVoteThread: PropTypes.func,
  handleNeutralizeVoteThread: PropTypes.func,
};
