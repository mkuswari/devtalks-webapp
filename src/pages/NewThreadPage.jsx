import React from "react";
import InputField from "../components/InputField";
import InputTextArea from "../components/InputTextArea";
import Button from "../components/Button";
import ActionBack from "../components/ActionBack";
import { useNavigate } from "react-router-dom";

const NewThreadPage = () => {
  const navigate = useNavigate();

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
          <form action="" className="space-y-4">
            <InputField label="Title" placeholder="Write title" />
            <InputField label="Category" placeholder="Write category" />
            <InputTextArea label="Content" placeholder="Write content" />
            <Button>Publish Thread</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewThreadPage;
