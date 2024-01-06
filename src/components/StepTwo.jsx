export default function StepTwo({ fullName, email, password, onClick }) {
  return (
    <>
      <h1>Results</h1>
      <ul>
        <li>Name: {fullName}</li>
        <li>email: {email}</li>
        <li>password: {password}</li>
      </ul>
      <button onClick={onClick}>Edit Information</button>
    </>
  );
}
