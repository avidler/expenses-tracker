import React, {useState} from 'react'

export default function AddTransactions({id, addTransaction}) {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const onSubmit = (event) => {
        event.preventDefault()
        const newTransaction = {
            id:id,
            text:text,
            amount:amount
        }
        addTransaction(newTransaction)
    }
    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Text</label>
                    <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text" type="text"/>
                    <div className="form-control">
                    <label>Amount</label>
                    <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter amount" type="number"/>
                    <button className="btn">Add Transaction</button>
                </div>
                </div>
            </form>
        </div>
    )
}