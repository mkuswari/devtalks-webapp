import PropTypes from "prop-types";
import InputField from "./InputField";
import useInput from "../hooks/useInput";
import Button from "./Button";

const LoginForm = ({ onLogin }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <div className="space-y-4 mt-6">
      <InputField
        type="text"
        label="Email"
        placeholder="Input your email"
        value={email}
        onChange={onEmailChange}
      />
      <InputField
        type="password"
        label="Password"
        placeholder="Input your password"
        value={password}
        onChange={onPasswordChange}
      />
      <div className="grid">
        <Button onClick={() => onLogin({ email, password })}>Login</Button>
      </div>
    </div>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
