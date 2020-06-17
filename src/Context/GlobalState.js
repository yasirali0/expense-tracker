import React, { createContext, useReducer} from 'react'
import { Reducer } from  './Reducer'

// initial state for our transactions
const initialState = {
    transactions: []
}

// create context
export const GlobalContext = createContext(initialState)

// create context provider and attach the reducer function to it so
// that every component has access to the state i.e transactions
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    // Action for deleting a transaction
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    // action for adding a transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    )
}