import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  // Différents State ---
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  //Gestion des states ---
  const handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "name":
        return setFullName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "passwordConfirm":
        return setPasswordConfirm(value);
      default:
        console.log("Wrong input");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      return setIsError(true);
    }

    if (isError && password === passwordConfirm) {
      setIsValid(true);
      return setIsError(false);
    }

    return setIsValid(true);
  };

  const handleEdit = () => {
    return setIsValid(false);
  };

  return (
    <div className="container">
      <main>
        <h1>{!isValid ? "Create account" : "Results"}</h1>
        {!isValid ? (
          <Form
            onChange={handleChange}
            onSubmit={handleSubmit}
            email={email}
            password={password}
            passwordConfirm={passwordConfirm}
            fullName={fullName}
            isError={isError}
          />
        ) : (
          <StepTwo
            fullName={fullName}
            email={email}
            password={password}
            onClick={handleEdit}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
