import React, { useContext} from "react";
import './item.css'
import { CartContext,usercart } from "../context/Cart";

const Item = (props) => {
    const cart = usercart()
    console.log("Cart", cart)
    return (
        <div className="Card">
            <h4>{props.name}</h4>
            <p>Price: ${props.price}</p>
            <button onClick={() => {
                cart.setItems([...cart.items, {name: props.name, price: props.price}])
            }}>Add to Cart</button>
        </div>
    )
}

export default Item;