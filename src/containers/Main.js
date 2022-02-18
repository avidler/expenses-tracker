import React, { Component } from 'react'
import { connect } from 'react-redux'
import Balance from '../components/Balance'
import AddTransactions from '../components/AddTransactions'
import TransactionsList from '../components/TransactionsList'
import IncomeExpense from '../components/IncomeExpense'
import { addTransaction, deleteTransaction } from '../redux/actions.js'

export class Main extends Component {
    render(){
        const { transactions, addTransaction, deleteTransaction } = this.props // contains transaction from mapStateToProps arrow function
        return (
            <div>
             <Balance transactions = {transactions} />
             <IncomeExpense transactions = {transactions} />
             <TransactionsList transactions = {transactions} deleteTransaction = {(id) => deleteTransaction(id)}/>
             <AddTransactions 
                addTransaction ={(transaction) => addTransaction(transaction)} 
                id = {transactions[0] ? transactions[0].id+1 : 1}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // transactions was set in reducer.js initial state
    transactions: state.transactions
})

const mapDispatchToProps = (dispatch) => ({
    // Getting the function from redux and turning it into a prop
    addTransaction: (transaction) => dispatch(addTransaction(transaction)),
    deleteTransaction: (id) => dispatch(deleteTransaction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)