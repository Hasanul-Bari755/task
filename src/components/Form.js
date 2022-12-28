import React, { useState } from "react";

const Form = () => {
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    if (phone.length < 11 || /[^0-9]/.test(phone)) {
      setError("Phone number is invalid");
      return;
    }
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
      setError("Email is invalid");
      return;
    }
    setError("");
    form.reset();
  };

  return (
    <div className="w-[90%] mx-auto">
      <h2>This is form</h2>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mt-3">
          <label className="mr-2">Name:</label>
          <input className="border-2" type="text" name="name" required />
        </div>
        <div className="mt-3">
          <label className="mr-2">Email:</label>
          <input className="border-2" type="email" name="email" required />
        </div>
        <div className="mt-3">
          <label className="mr-2">Phone:</label>
          <input className="border-2" type="text" name="phone" required />
        </div>
        <p className="text-red-400">{error}</p>
        <div className="mt-3 font-semibold">
          <input className="border-2" type="Submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
