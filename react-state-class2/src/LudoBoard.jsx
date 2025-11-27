import { useState } from "react"

export default function LudoBoard() {

    let [moves, setMoves] = useState({blue:0, red:0, yellow:0, green:0})
    let [count, setCount] = useState(0)

    let updateBlue = () => {
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
           return {...prevMoves, blue: prevMoves.blue+1}
        })
    }
    let updateYellow = () => {
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((prevMoves) => {
           return {...prevMoves, yellow: prevMoves.yellow+1}
        })
    }
    let updateGreen = () => {
        console.log(`moves.green = ${moves.green}`);
        setMoves((prevMoves) => {
           return {...prevMoves, green: prevMoves.green+1}
        })
    }
    let updateRed = () => {
        console.log(`moves.red = ${moves.red}`);
        setMoves((prevMoves) => {
           return {...prevMoves, red: prevMoves.red+1}
        })
    }

    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button onClick={updateYellow}  style={{backgroundColor: "yellow"}}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>

            </div>
        </div>
    )
}