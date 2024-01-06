export default function StepTwo({ fullName, email, password, onClick }) {
  return (
    <div className="results">
      <ul>
        <li>Name : {fullName}</li>
        <li>Email : {email}</li>
        <li>Password : {password}</li>
      </ul>
      <button onClick={onClick}>Edit your information</button>
    </div>
  );
}
