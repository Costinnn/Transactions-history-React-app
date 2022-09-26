import "./Transactions.css";
import TransactionsContainer from "./TransactionsContainer";

function Transactions(props) {

  return (
    <div className="all-transactions">
        <TransactionsContainer transactions={props.transactions}/>
    </div>
  );
}

export default Transactions;
