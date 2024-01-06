export default function Form({
  onChange,
  onSubmit,
  email,
  password,
  passwordConfirm,
  fullName,
  isError,
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
        <input
          className={isError && "isError"}
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={onChange}
        />
        <label htmlFor="">Confirm your password</label>
        <input
          className={isError && "isError"}
          type="password"
          name="passwordConfirm"
          placeholder="Confirm your password"
          value={passwordConfirm}
          onChange={onChange}
        />
        {isError && (
          <p className="text-error">Vos mots de passe ne sont pas identiques</p>
        )}
        <button>Register</button>
      </form>
    </>
  );
}
