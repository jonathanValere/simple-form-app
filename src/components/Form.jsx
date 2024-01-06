export default function Form({
  onChange,
  onSubmit,
  email,
  password,
  passwordConfirm,
  fullName,
}) {
  return (
    <>
      <h1>Create account</h1>
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
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={onChange}
        />
        <label htmlFor="">Confirm your password</label>
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Confirm your password"
          value={passwordConfirm}
          onChange={onChange}
        />
        <button>Register</button>
      </form>
    </>
  );
}
