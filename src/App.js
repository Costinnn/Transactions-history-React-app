import Transactions from "./components/transactions/Transactions";
import NewTransactionsContainer from "./components/newTransactions/NewTransactionsContainer";
import { useState } from "react";

const transactionsArr = [
    {
        id: '1',
        description:'Gas',
        amount: 12.3,
    },
    {
        id: '2',
        description:'Food',
        amount: 122.3,
    },
    {
        id: '3',
        description:'Cinema',
        amount: 102,
    },
    {
        id: '4',
        description:'Car',
        amount: 1222.3,
    }
];

function App(){

    const [transactions, setTransaction] = useState(transactionsArr);

    const addTransaction = transaction => {
        setTransaction(prevTransaction => {
            return [...prevTransaction, transaction]
        })
    }

    return(
        <div>
            <NewTransactionsContainer onAddTransaction={addTransaction}/>
            <Transactions transactions = {transactions}/>
        </div>
    );
};

export default App;

// #022B3A  -Dark blue
// #1F7A8C  -green Blue
// #BFDBF7  -baby blue
// #E1E5F2  -white grey
// #FFFFFF  -white