import React, { useReducer } from 'react';
import shoppingCartReducer from './shoppingCartReducer';


const ShoppingCart = () => {
    const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, [])
    const calculateTotal = () => {
        return shoppingCart.reduce((total, item) => total + item.price, 0)
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {shoppingCart.map((item) => (
                    <li key={item.id}>{item.name} - {item.price}</li>
                ))}
            </ul>
            <h4>Total: {calculateTotal()}</h4>
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: 1, name: 'Product 1', price: 10 }})}>ADD_ITEM</button>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: 1 })}>REMOVE_ITEM</button>
        </div>
    )
}

export default ShoppingCart;