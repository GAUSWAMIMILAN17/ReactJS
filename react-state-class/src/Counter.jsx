import { useState } from "react";

function init() {
    console.log("init was executed")
    return Math.random();
}

export default function Counter (){
    const [count, setCount] = useState(init)
    console.log("Counter is re-render");
    // console.log(`New Count ${count}`)

    let  incCount = () => {
        setCount((count) => {
            return count + 1} );
        setCount((count) => {
            return count + 1} );
        // console.log(`Old Count ${count}`)
    }

    return (<div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase Count</button>
    </div>
    )
}