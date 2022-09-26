import './Transaction.css'

function Transaction(props){
   
    return(
        <div className="transaction">
          <p>{props.description}</p>
          <p>${props.amount}</p>
        </div>
    );
}

export default Transaction;