import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmitHandler = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text, // can grab it from state defined above
            amount: Number(amount) // as the amount is passed as string we convert it to number
        }

        // call addTransaction from context and pass the newTransaction
        addTransaction(newTransaction)

        setText('')  // to clear the text field
        setAmount(0) // to clear the amount field

    } 
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmitHandler}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter description...' />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount
                        <br />
                        (Negative - expense, Positive - income)
                    </label>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button className='btn' disabled={amount === 0 ? true : false}>Add Transaction</button>
            </form>
        </>
    )
}
