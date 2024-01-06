import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt, faEye, faEyeSlash);
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
  const [isError, setIsError] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePasswordConfirm, setTogglePasswordConfirm] = useState(false);

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
    // gestion de l'erreur de mots de passe pas identiques
    if (password !== passwordConfirm) {
      return setIsError("Wrong");
    }
    // Validation du formulaire
    if (isError && password === passwordConfirm) {
      setIsValid(true);
      return setIsError("");
    }

    return setIsValid(true);
  };

  const handleEdit = () => {
    if (togglePassword || togglePasswordConfirm) {
      setTogglePassword(false);
      setTogglePasswordConfirm(false);
    }
    return setIsValid(false);
  };

  const isTogglePassword = () => {
    return setTogglePassword(!togglePassword);
  };

  const isTogglePasswordConfirm = () => {
    return setTogglePasswordConfirm(!togglePasswordConfirm);
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
            onClickPassword={isTogglePassword}
            isTogglePassword={togglePassword}
            onClickPasswordConfirm={isTogglePasswordConfirm}
            isTogglePasswordConfirm={togglePasswordConfirm}
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
