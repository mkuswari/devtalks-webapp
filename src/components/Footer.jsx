import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-24 flex items-center bg-indigo-500">
      <div className="container flex justify-between items-center">
        <p className="text-white text-sm">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="underline decoration-wavy">DevTalks</span> All Rights
          Reserved
        </p>
        <div>
          <a
            href="https://github.com/mkuswari/devtalks-webapp"
            className="text-white"
          >
            <FaGithub className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
