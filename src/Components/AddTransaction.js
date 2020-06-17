import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
// to generate unique ids fas keys for li items
// import { uuid } from 'uuid/dist/v5'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmitHandler = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text, // can grab it from state defined above
            amount: +amount // as the amount is passed as string we convert it to number by this +amount syntax
        }

        // call addTransaction from context and pass the newTransaction
        addTransaction(newTransaction)
    } 
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmitHandler}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount
                        <br />
                        (Negative - expense, Positive - income)
                    </label>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button className='btn' disabled='true'>Add Transaction</button>
            </form>
        </>
    )
}
