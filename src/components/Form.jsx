import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";

export default function Form({ ...props }) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          nameInput="name"
          placeHolder="Enter your name"
          value={props.fullName}
          onChange={props.onChange}
        />
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          nameInput="email"
          placeHolder="Enter your email"
          value={props.email}
          onChange={props.onChange}
        />
        <label htmlFor="">Password</label>
        <div className="input-container-pass">
          <FontAwesomeIcon
            icon={props.isTogglePassword ? "eye-slash" : "eye"}
            onClick={props.onClickPassword}
          />
          <input
            className={props.isError && "isError"}
            type={props.isTogglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={props.password}
            onChange={props.onChange}
          />
        </div>
        <label htmlFor="">Confirm your password</label>
        <div className="input-container-pass">
          <FontAwesomeIcon
            icon={props.isTogglePasswordConfirm ? "eye-slash" : "eye"}
            onClick={props.onClickPasswordConfirm}
          />

          <input
            className={props.isError && "isError"}
            type={props.isTogglePasswordConfirm ? "text" : "password"}
            name="passwordConfirm"
            placeholder="Confirm your password"
            value={props.passwordConfirm}
            onChange={props.onChange}
          />
        </div>
        {props.isError && (
          <p className="text-error">Vos mots de passe ne sont pas identiques</p>
        )}
        <button>Register</button>
      </form>
    </>
  );
}
