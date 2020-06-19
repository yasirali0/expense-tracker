import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const [expBtn, setExpBtn] = useState(false) // this state keeps track of whether the expense button is clicked or not

    const { addTransaction } = useContext(GlobalContext)

    // form submit handler
    const onSubmitHandler = e => {
        e.preventDefault()

        if (expBtn === true) {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text, // can grab it from state defined above
                amount: -amount
            }
            setExpBtn(false)
            addTransaction(newTransaction) // call addTransaction from context and pass the newTransaction
        }
        else {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text, // can grab it from state defined above
                amount: +amount // as the amount is passed as string we convert it to number
            }
            addTransaction(newTransaction) // call addTransaction from context and pass the newTransaction
        }


        setText('')  // to clear the text field
        setAmount('') // to clear the amount field

    } 
    return (
        <>
            <hr />
            <form onSubmit={onSubmitHandler}>
                
                <div className='form-control'>
                    <label htmlFor='text'>Add Description</label>

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
                    onClick={() => setExpBtn(true)}
                    disabled={Number(amount) <= 0 | amount.length < 1 ? true : false}>
                        Add as Expense
                    </button>
                </div>
            </form>
        </>
    )
}
