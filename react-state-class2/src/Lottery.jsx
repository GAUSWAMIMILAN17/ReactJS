import { useState } from "react";
import {getTicket, sum} from "./helper"
import "./Lottery.css"

export default function Lottery() {
    let [ticket, setTicket] = useState( getTicket(3) )
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(getTicket(3));
    }

    return<div>
        <h1>Lottery Game!</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <h3>{isWinning && "Congratulation , you won!"}</h3>
        <button onClick={buyTicket}>Buy New Ticket</button>
    </div>
}