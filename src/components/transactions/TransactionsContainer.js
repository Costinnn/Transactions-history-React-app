import "./TransactionsContainer.css";
import Transaction from "./Transaction";
import React, {useState} from "react";

function TransactionsContainer(props) {

  return (
    <div className="transaction-container">
      <div className="transaction-box">
        {props.transactions.map((element) => (
          <Transaction 
          key={element.id}
          description={element.description}
          amount={element.amount}/>
        ))}
      </div>
    </div>
  );
}

export default TransactionsContainer;
