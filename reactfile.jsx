import React, { useState } from "react";

function Form() {
  // State to store the input values
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  // Event handler for input change
  const handleInputChange = event => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  // Event handler for form submit
  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={inputs.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={inputs.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
