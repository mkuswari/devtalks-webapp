import PropTypes from "prop-types";

const Button = ({ children, ...rest }) => {
  return (
    <button
      className="bg-indigo-600 text-white text-sm px-6 py-3 rounded-xl disabled:bg-indigo-300"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
