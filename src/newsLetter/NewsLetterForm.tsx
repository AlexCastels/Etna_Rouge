import { SyntheticEvent, useState } from "react";
import Button from "../components/UI/button/Button";
import "./newsLetterForm.scss";
import DialogNewsLetter from "./DialogNewsLetter";

const NewsLetterForm: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string | null>(null);

  const handleSubmitClick = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!gender) {
      alert("Please select your gender");
      return;
    }

      setSubmitted(true);
      
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
      
      {submitted && <DialogNewsLetter /> }    
      <div className="container">
        <h2> Subscribe to our Newsletter to get a 15% discount! </h2>
        <form>
          <label id="email"> E-mail </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

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
          <Button
            className="submit-btn"
            onClick={handleSubmitClick}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewsLetterForm;
