import LoadingBar from "react-redux-loading-bar";

const Loading = () => {
  return (
    <div className="sticky top-0">
      <LoadingBar style={{ backgroundColor: "#6366f1", height: "3px" }} />
    </div>
  );
};

export default Loading;
