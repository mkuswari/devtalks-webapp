import React, { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const CommentForm = ({ onAddComment }) => {
  const [content, setContent] = useState("");

  const onSubmitComment = () => {
    if (content === "<div></div>") {
      toast.error("Please fill in comment");
      return;
    }
    onAddComment(content);
  };

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
        <div className="mb-3">
          <FroalaEditor
            model={content}
            onModelChange={setContent}
            config={{
              placeholderText: "Write your comment",
            }}
          />
        </div>
        <button
          onClick={onSubmitComment}
          className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CommentForm;

CommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
};
