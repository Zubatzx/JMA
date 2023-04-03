import emailjs from "emailjs-com";
import Loading from "./Loading";
import { useState } from "react";

function Body() {
  const [loading, setLoading] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);

  function validateForm() {
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  function validateName(e) {
    setNameError("");
    let name = e.target.value;
    if (!name) {
      setNameError("Name cannot be empty");
      setIsNameValid(false);
    }

    if (name !== "undefined") {
      if (!name.match(/^[a-zA-Z\s]+$/)) {
        setNameError("Name can only include letters");
        setIsNameValid(false);
      } else {
        setIsNameValid(true);
      }
    }

    validateForm();
  }

  function validatePhone(e) {
    setPhoneError("");
    let phone = e.target.value;
    if (!phone) {
      setPhoneError("Phone cannot be empty");
      setIsPhoneValid(false);
    }
    if (phone !== "undefined") {
      if (phone.length < 10) {
        setPhoneError("Phone number is not valid");
        setIsPhoneValid(false);
      } else {
        setIsPhoneValid(true);
      }
    }

    validateForm();
  }

  function validateEmail(e) {
    setEmailError("");
    let email = e.target.value;
    if (!email) {
      setEmailError("Email cannot be empty");
      setIsEmailValid(false);
    }

    if (email !== "undefined") {
      if (
        !email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setEmailError("Email is not valid");
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
    }

    validateForm();
  }

  function validateMessage(e) {
    setMessageError("");
    let message = e.target.value;
    if (!message) {
      setMessageError("Message cannot be empty");
      setIsMessageValid(false);
    } else {
      setIsMessageValid(true);
    }

    validateForm();
  }

  function sendEmail(e) {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_elq4nps",
        "template_rkar14q",
        e.target,
        "user_f8YhVsDs6o09kh0BIScLB"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormValid(false);
          setSuccessMessage("Email successfully sent!");
          setTimeout(() => setSuccessMessage(""), 3000);
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setIsFormValid(false);
          setErrorMessage("oops we encountered an error! please try again");
        }
      );
  }

  return (
    <section className="contact-us-content">
      <div className="contact-us-content-details">
        <div className="jma-details">
          <h4>JMA MANAGEMENT OFFICE</h4>
          <p>
            Wisma BNI 46 2nd Floor
            <br />
            Jl. Jendral Sudirman Kav 1, Jakarta Pusat
          </p>
          <p>
            Phone Number: 021-5747511
            <br />
            Email: indonesia@jmakademi.id   
          </p>
          <p>
            Social Media
            <br />
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100065013322597">
              <i
                color="black"
                className="fab fa-facebook-f"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://www.instagram.com/jmakademi/">
              <i
                color="black"
                className="fab fa-instagram"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://www.youtube.com/channel/UCy5xg-4ByDm1TJNkM9HrnYA">
              <i
                color="black"
                className="fab fa-youtube"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <p>Drop us a message, we are happy to help your enquiry</p>
        </div>
        <div className="maps">
          <img src="/images/tempAddress.jpg" alt=""></img>
        </div>
      </div>
      <form className="contact-us-content-contact-details" onSubmit={sendEmail}>
        {loading === true && <Loading />}
        <label>Full Name</label>
        <input
          placeholder="Your Full Name"
          type="text"
          name="user_name"
          id="user_name"
          className={nameError ? "error-input" : ""}
          onChange={(e) => {
            validateName(e);
          }}
        />

        {nameError && <p className="error form"> {nameError} </p>}
        <label>Email</label>
        <input
          placeholder="Your Email"
          type="text"
          name="user_email"
          id="user_email"
          className={emailError ? "error-input" : ""}
          onChange={(e) => {
            validateEmail(e);
          }}
        />

        {emailError && <p className="error form"> {emailError} </p>}
        <label>Phone Number</label>
        <input
          placeholder="Your Phone Number"
          type="text"
          name="user_phone"
          id="user_phone"
          className={phoneError ? "error-input" : ""}
          onChange={(e) => {
            validatePhone(e);
          }}
          type="number"
          pattern="[0-9]"
        />

        {phoneError && <p className="error form"> {phoneError} </p>}

        <label>Message</label>
        <textarea
          placeholder="Your Message"
          type="text"
          name="user_message"
          id="user_message"
          className={messageError ? "error-input" : ""}
          onChange={(e) => {
            validateMessage(e);
          }}
        />
        {messageError && <p className="error form"> {messageError} </p>}
        {errorMessage && <p className="error"> {errorMessage} </p>}

        {successMessage && <p className="success"> {successMessage} </p>}

        <button
          type="submit"
          className={isFormValid === false ? "disabled" : ""}
        >
          Send
        </button>
      </form>
      <div className="maps-mobile">
        <img src="/images/tempAddress.jpg" alt=""></img>
      </div>
    </section>
  );
}
export default Body;
