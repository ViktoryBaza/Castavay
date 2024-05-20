import React, { useState } from "react";
import "../styles/FormComponent.css";
const FromComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Имя: ", name);
    console.log("Email:", email);
    setEmail("");
    setName("");
  };

  return (
    <div className="form">
      <div className="form-text">
        <div className="newsletter">Email Newsletter</div>
        <div className="updates">
          Subscribe <br /> for updates
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="label">
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="email">
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
        </div>
        <button type="submit" class="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default FromComponent;
