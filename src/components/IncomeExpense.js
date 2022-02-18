import React from 'react'

export default function IncomeExpense({transactions}) {
    const amount = transactions.map((transaction) => Number(transaction.amount))
    const incomeAmount = amount.filter((transactionAmount) => Number(transactionAmount)>=0)
    const incomeTotal = (incomeAmount.reduce((acc, item) => (acc+item), 0))
    const expensesAmount = amount.filter((transactionAmount) => Number(transactionAmount)<0)
    const expensesTotal = (expensesAmount.reduce((acc, item) => (acc+item), 0))
    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">£{incomeTotal}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">£{expensesTotal}</p>
            </div>
        </div>
        
    )
}