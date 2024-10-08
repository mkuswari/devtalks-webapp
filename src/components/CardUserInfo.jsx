import PropTypes from "prop-types";

const CardUserInfo = ({ name, avatar }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-5 flex justify-center">
      <div className="text-center">
        <img
          src={avatar}
          className="w-16 h-16 rounded-full mx-auto mb-3"
          alt="Avatar"
        />
        <h2 className="text-sm font-semibold text-slate-800">{name}</h2>
      </div>
    </div>
  );
};

export default CardUserInfo;

CardUserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
