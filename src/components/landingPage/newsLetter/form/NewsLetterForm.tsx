import { useState } from "react";

import DialogNewsLetter from "../dialog/DialogNewsLetter.js";
import "./newsLetterForm.scss";
import { FormattedMessage } from "react-intl";
import { internalMemory } from "../../../../utils/internalMemory.js";
import Button from "../../../UI/button/Button.js";

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
      {openDialog && (
        <DialogNewsLetter
          message={
            registeredYet ? (
              <FormattedMessage
                id="dialog.email.yetRegistered"
                defaultMessage="This email is already registered"
              />
            ) : invalidEmail ? (
              <FormattedMessage
                id="dialog.invalid.email"
                defaultMessage="Please enter a valid email address"
              />
            ) : genderNotSelected ? (
              <FormattedMessage
                id="dialog.invalid.gender"
                defaultMessage="Please select a valid gender"
              />
            ) : (
              <FormattedMessage
                id="dialog.success"
                defaultMessage="Thank you for subscribing!"
              />
            )
          }
          onClose={handleCloseDialog}
          submitted={submitted}
        />
      )}
      <div className="newsletter-container">
        <h2 className="newsletter-title">
          <FormattedMessage
            id="news.title"
            defaultMessage="Subscribe to our Newsletter to get a 15% discount!"
          />
        </h2>
        <form className="newsletter-form">
          <div className="newsletter-btn-cont">
            <Button
              type="button"
              className={`gender-btn ${gender === "male" ? "active" : ""}`}
              onClick={() => handleGenderClick("male")}
            >
              <FormattedMessage
                id="news.button.gend.men"
                defaultMessage="Man"
              />
            </Button>
            <Button
              type="button"
              className={`gender-btn ${gender === "female" ? "active" : ""}`}
              onClick={() => handleGenderClick("female")}
            >
              <FormattedMessage
                id="news.button.gend.women"
                defaultMessage="Woman"
              />
            </Button>
          </div>
          <label id="newsletter-email"> E-mail </label>
          <span className="newsletter-input-cont">
            <input className="newsletter-email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className={`newsletter-submit-button ${submitted ? "active-submit" : ""} `}
              onClick={handleSubmitClick}
              type="submit"
            >
              <FormattedMessage
                id="news.button.confirm"
                defaultMessage="Confirm"
              />
            </Button>
          </span>
        </form>
      </div>
    </>
  );
};

export default NewsLetterForm;
