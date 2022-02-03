import React from "react";
import "./FormStyles.scss";

const Form = () => {
  return (
    <div>
      <form action="">
        <label>Your Name</label>
        <input type="text" />
        <label> Your Email</label>
        <input type="email" />
        <label> Date</label>
        <input type="date" />
        <label> Details</label>
        <textarea placeholder="Say something"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
