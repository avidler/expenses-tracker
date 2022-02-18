import React from 'react'

export default function Transaction({transaction, deleteTransaction}) {
    console.log(transaction)
    let sign=transaction.amount >= 0 ? "+" : "-"
    return(
        
        <li className={transaction.amount >= 0 ? "plus" : "minus"}>
            {transaction.text} 
            <span>
                {sign}£{Math.abs(Number(transaction.amount))}
            </span>
            <button 
                className="delete-btn" 
                onClick={() => deleteTransaction(transaction.id)}
            > 
                X 
            </button>
        </li>
    )
}