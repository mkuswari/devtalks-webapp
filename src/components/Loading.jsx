import React from "react";
import LoadingBar from "react-redux-loading-bar";

const Loading = () => {
  return (
    <div className="sticky top-0">
      <LoadingBar style={{ backgroundColor: "orange", height: "5px" }} />
    </div>
  );
};

export default Loading;
