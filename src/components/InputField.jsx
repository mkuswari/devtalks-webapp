import PropTypes from "prop-types";

const InputField = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  isError,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        className="h-12 px-4 border border-slate-200 focus:outline-none rounded-xl focus:border-indigo-500 transition ease-in-out duration-150 text-sm"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isError && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
