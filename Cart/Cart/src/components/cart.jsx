import React,{useContext} from "react";
import './item.css'
import { CartContext, usercart } from "../context/Cart";


const Cart = () => {
    const cart = usercart();
    const total = cart.items.reduce((a,b)=> a+b.price, 0)
    return (
        <>
        <h2>Cart</h2>
        {
            cart && cart.items.map((item) => <li>{item.name} - {item.price} </li>)
        }
        <h4>Total Bill: ${total}</h4>
        </>
    )
}

export default Cart;