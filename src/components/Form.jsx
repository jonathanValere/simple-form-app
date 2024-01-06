import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Form({
  onChange,
  onSubmit,
  email,
  password,
  passwordConfirm,
  fullName,
  isError,
  onClickPassword,
  isTogglePassword,
  onClickPasswordConfirm,
  isTogglePasswordConfirm,
}) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={fullName}
          onChange={onChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={onChange}
        />
        <label htmlFor="">Password</label>
        <div className="input-container-pass">
          <FontAwesomeIcon
            icon={isTogglePassword ? "eye-slash" : "eye"}
            onClick={onClickPassword}
          />
          <input
            className={isError && "isError"}
            type={isTogglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={onChange}
          />
        </div>
        <label htmlFor="">Confirm your password</label>
        <div className="input-container-pass">
          <FontAwesomeIcon
            icon={isTogglePasswordConfirm ? "eye-slash" : "eye"}
            onClick={onClickPasswordConfirm}
          />

          <input
            className={isError && "isError"}
            type={isTogglePasswordConfirm ? "text" : "password"}
            name="passwordConfirm"
            placeholder="Confirm your password"
            value={passwordConfirm}
            onChange={onChange}
          />
        </div>
        {isError && (
          <p className="text-error">Vos mots de passe ne sont pas identiques</p>
        )}
        <button>Register</button>
      </form>
    </>
  );
}
