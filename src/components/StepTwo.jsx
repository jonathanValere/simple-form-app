export default function StepTwo({ fullName, email, password, onClick }) {
  return (
    <>
      <ul>
        <li>Name: {fullName}</li>
        <li>email: {email}</li>
        <li>password: {password}</li>
      </ul>
      <button onClick={onClick}>Edit your information</button>
    </>
  );
}
