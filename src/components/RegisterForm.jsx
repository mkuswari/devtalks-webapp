import PropTypes from "prop-types";
import InputField from "./InputField";
import useInput from "../hooks/useInput";
import Button from "./Button";

const RegisterForm = ({ onRegister }) => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [passwordConfirm, onPasswordConfirmChange] = useInput("");

  return (
    <div className="space-y-4 mt-6">
      <InputField
        type="text"
        label="Full name"
        placeholder="Input your full name"
        value={name}
        onChange={onNameChange}
      />
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
      <InputField
        type="password"
        label="Password Confirmation"
        placeholder="Confirm your password"
        value={passwordConfirm}
        onChange={onPasswordConfirmChange}
      />
      <div className="grid">
        <Button
          onClick={() => onRegister({ name, email, password, passwordConfirm })}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
