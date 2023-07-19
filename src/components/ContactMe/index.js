import React, { useState } from "react";

function ContactMe() {
  // Email regex to validate email input
  const emailRegEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  // Create state variables to track form input values
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  // Create state variables to track whether an input value is blank and email is valid
  const [isNameBlank, setIsNameBlank] = useState(false);
  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageBlank, setIsMessageBlank] = useState(false);

  // Handler function used when form input field loses focus
  const validateInput = (e) => {
    // Destructure the field's name and value
    const { name, value } = e.target;

    // Check if value is empty
    const isBlank = value.trim().length === 0;

    if (name === "name") {
      setIsNameBlank(isBlank); // If Name is blank, set state variable
      
    } else if (name === "email") {
      setIsEmailBlank(isBlank); // If Email is blank, set state variable
      
      if (!isBlank) {
        setIsEmailValid(emailRegEx.test(formEmail)); // If Email isn't blank, then set valid email variable by validating regex
      }
    } else if (name === "message") {
      setIsMessageBlank(isBlank); // If Message is blank, set state variable
      
    }
  };

  return (
    <div>
      <div className="row">
        <h1 className="h1">Contact Me</h1>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <form>
            <label>Name</label>
            {/* If Name is blank, display error message */}
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
              value={formName}  // Set value to state variable
              className="form-control"
              onBlur={validateInput}  // Set onBlur handler
              onChange={(e) => setFormName(e.target.value.trim())} // Update state variable when value changes
            ></input>
            <label>Email Address</label>
            {/* If Email is blank, display error message */}
            {isEmailBlank ? (
              <label className="ms-2 text-danger">
                This value is required!
              </label>
            ) : (
              <label />
            )}
            {/* If Email isn't valid, display error message */}
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
              value={formEmail}  // Set value to state variable
              className="form-control"
              onBlur={validateInput}  // Set onBlur handler
              onChange={(e) => setFormEmail(e.target.value.trim())} // Update state variable when value changes
            ></input>
            <label>Message</label>
            {/* If Message is blank, display error message */}
            {isMessageBlank ? (
              <label className="ms-2 text-danger">
                This value is required!
              </label>
            ) : (
              <label />
            )}
            <textarea
              name="message"
              value={formMessage} // Set value to state variable
              className="form-control"
              rows="5"
              onBlur={validateInput}  // Set onBlur handler
              onChange={(e) => setFormMessage(e.target.value)} // Update state variable when value changes
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              disabled={true} // Disable form submit button since functionality isn't built in
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
