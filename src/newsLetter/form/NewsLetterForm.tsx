import { useState } from "react";
import { internalMemory } from "../../utils/internalMemory.ts";
import Button from "../../components/UI/button/Button.js";
import DialogNewsLetter from "../dialog/DialogNewsLetter.js";
import "./NewsLetterForm.scss";

const NewsLetterForm: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [registeredYet, setRegisteredYet] = useState<boolean>(false);
  const [genderNotSelected, setGenderNotSelected] = useState<boolean>(false);
  const [gender, setGender] = useState<string | null>(null);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setInvalidEmail(false);
    setRegisteredYet(false);
    setGenderNotSelected(false);
  };

  const handleSubmitClick = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setInvalidEmail(true);
      setOpenDialog(true);
      return;
    }

    if (!gender) {
      setGenderNotSelected(true);
      setOpenDialog(true);
      return;
    }

    if (internalMemory.get(email) === email) {
      setRegisteredYet(true);
      setOpenDialog(true);
      return;
    } else {
      internalMemory.set(email, email);
      setSubmitted(true);
      setOpenDialog(true);
    }

    setTimeout(() => {
      setSubmitted(false);
      handleCloseDialog();
    }, 4000);
  };

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <hr />
      {openDialog && (
        <DialogNewsLetter
          message={
            registeredYet
              ? "Your e-mail is already registered!"
              : invalidEmail
              ? "Insert a valid email"
              : genderNotSelected
              ? "Select a valid gender"
              : "Welcome to Etna Rouge family!"
          }
          onClose={handleCloseDialog}
          submitted={submitted}
        />
      )}
      <div className="container">
        <h2> Subscribe to our Newsletter to get a 15% discount! </h2>
        <form>
          <div className="btn-cont">
            <Button
              type="button"
              className={`gender-btn ${gender === "male" ? "active" : ""}`}
              onClick={() => handleGenderClick("male")}
            >
              Man
            </Button>
            <Button
              type="button"
              className={`gender-btn ${gender === "female" ? "active" : ""}`}
              onClick={() => handleGenderClick("female")}
            >
              Woman
            </Button>
          </div>
          <label id="email"> E-mail </label>
          <span className="input-cont">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className={`submit-btn ${submitted ? "active-submit" : ""} `}
              onClick={handleSubmitClick}
              type="submit"
            >
              Confirm
            </Button>
          </span>
        </form>
      </div>
    </>
  );
};

export default NewsLetterForm;
