import React from "react";
import CardThread from "./CardThread";
import PropTypes from "prop-types";

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
          showCommentStats={true}
        />
      ))}
    </div>
  );
};

export default ThreadSection;

ThreadSection.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.object),
  handleUpVoteThread: PropTypes.func,
  handleDownVoteThread: PropTypes.func,
  handleNeutralizeVoteThread: PropTypes.func,
};
