import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

const InputSearch = ({ onChange, value, placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="px-6 w-full focus:outline-none rounded-lg h-12 border border-slate-200 text-sm text-slate-800 font-medium"
        onChange={onChange}
        value={value}
      />
      <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
        <FiSearch />
      </div>
    </div>
  );
};

export default InputSearch;

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
