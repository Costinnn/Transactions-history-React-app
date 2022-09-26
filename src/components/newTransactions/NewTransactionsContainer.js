import "./NewTransactionsContainer.css";
import React, { useState } from "react";

function NewTransactionsContainer(props) {
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const descriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const transactionData = {
      description: enteredDescription,
      amount: enteredAmount
    }
    props.onAddTransaction(transactionData);

    setEnteredAmount('');
    setEnteredDescription('');

  }

  return (
    <form onSubmit={submitHandler} className="newtransaction-container">
      <div className="input-box">
        <label>Description</label>
        <input
          type="text"
          value={enteredDescription}
          onChange={descriptionHandler}
        ></input>
      </div>
      <div className="input-box">
        <label>Amount</label>
        <input
          type="number"
          min="1"
          max="10000"
          value={enteredAmount}
          onChange={amountHandler}
        ></input>
      </div>
      <div className="input-buttons">
        <button type="button" className="hide-btn">
          Hide Form
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default NewTransactionsContainer;
