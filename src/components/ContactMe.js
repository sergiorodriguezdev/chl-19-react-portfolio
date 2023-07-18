import React, { useState } from "react";

function ContactMe(props) {
  const emailRegEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const [isNameBlank, setIsNameBlank] = useState(false);
  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageBlank, setIsMessageBlank] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const validateInput = (e) => {
    const { name, value } = e.target;
    const isBlank = value.trim().length === 0;

    if (name === "name") {
      setIsNameBlank(isBlank);
      setDisableSubmit(isBlank || isEmailBlank || isMessageBlank);
    } else if (name === "email") {
      setIsEmailBlank(isBlank);
      setDisableSubmit(isNameBlank || isBlank || isMessageBlank);
      if (!isBlank) {
        setIsEmailValid(emailRegEx.test(formEmail));
      }
    } else if (name === "message") {
      setIsMessageBlank(isBlank);
      setDisableSubmit(isNameBlank || isEmailBlank || isBlank);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    alert("Message sent!");

    setFormName("");
    setFormEmail("");
    setFormMessage("");
  };

  return (
    <div>
      <div className="row">
        <h1 className="h1">Contact Me</h1>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <form onSubmit={formSubmit}>
            <label>Name</label>
            {isNameBlank ? (
              <label className="ms-2 text-danger">
                This value is required!
              </label>
            ) : (
              <label />
            )}
            <input
              type="text"
              name="name"
              value={formName}
              className="form-control"
              onBlur={validateInput}
              onChange={(e) => setFormName(e.target.value.trim())}
            ></input>
            <label>Email Address</label>
            {isEmailBlank ? (
              <label className="ms-2 text-danger">
                This value is required!
              </label>
            ) : (
              <label />
            )}
            {!isEmailValid ? (
              <label className="ms-2 text-danger">
                Please enter a valid email!
              </label>
            ) : (
              <label />
            )}
            <input
              type="email"
              name="email"
              value={formEmail}
              className="form-control"
              onBlur={validateInput}
              onChange={(e) => setFormEmail(e.target.value.trim())}
            ></input>
            <label>Message</label>
            {isMessageBlank ? (
              <label className="ms-2 text-danger">
                This value is required!
              </label>
            ) : (
              <label />
            )}
            <textarea
              name="message"
              value={formMessage}
              className="form-control"
              rows="5"
              onBlur={validateInput}
              onChange={(e) => setFormMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              disabled={disableSubmit ? true : false}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
