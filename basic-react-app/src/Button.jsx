function printHello() {
    console.log("Hello!")
}

function saybye() {
    console.log("Bye")
}
export default function Button() {
    return (<div>
        <button onClick={printHello}>Click me!</button>
        <p onMouseOver={saybye}>You can leave this classroom</p>
    </div>
    )
}