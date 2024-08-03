import React, { useState } from "react";
import InputField from "../components/InputField";
import InputTextArea from "../components/InputTextArea";
import Button from "../components/Button";
import ActionBack from "../components/ActionBack";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { asyncAddThread } from "../states/threads/action";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

const NewThreadPage = () => {
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");

  const [body, setBody] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddThread = () => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate("/");
  };

  return (
    <div className="container my-4">
      {/* action back */}
      <ActionBack navigate={() => navigate("/")} />
      <div className="p-2">
        <h2 className="text-xl md:text-2xl text-slate-800 font-light">
          Create new thread
        </h2>
      </div>
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-4">
        <div className="w-full p-8 rounded-xl border border-slate-200 bg-white mt-2">
          <div className="space-y-4">
            <InputField
              label="Title"
              placeholder="Write title"
              value={title}
              onChange={onTitleChange}
            />
            <InputField
              label="Category"
              placeholder="Write category"
              value={category}
              onChange={onCategoryChange}
            />
            <FroalaEditor
              model={body}
              onModelChange={setBody}
              config={{
                placeholderText: "Write content",
              }}
            />
            <Button onClick={onAddThread}>Publish Thread</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewThreadPage;
