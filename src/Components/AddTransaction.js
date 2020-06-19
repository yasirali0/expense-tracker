import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

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
        setAmount('') // to clear the amount field

    } 
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmitHandler}>
                
                <div className='form-control'>
                    <label htmlFor='text'>Description</label>

                    <input 
                    type='text' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder='Enter description of your transaction...' 
                    />
                </div>

                <div className='form-control'>
                    
                    <label htmlFor='amount'>Amount</label>
                    
                    <input 
                    type='number' 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='Enter amount...' 
                    />
                </div>
                <div className='add-btns'>
                    
                    <button 
                    className='btn' 
                    disabled={Number(amount) <= 0 | amount.length < 1 ? true : false}>
                        Add as Income
                    </button>
                    
                    <button 
                    className='btn btn-expense' 
                    onClick={() => setAmount(amount * -1)} 
                    disabled={Number(amount) <= 0 | amount.length < 1 ? true : false}>
                        Add as Expense
                    </button>
                </div>
            </form>
        </>
    )
}
