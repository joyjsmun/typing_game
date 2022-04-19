import React from "react"
import useWordGame from "./useWordGame"

function App() {

  const {textBoxRef,text,handleChange,startGame,timeRemain,startClock,count} = useWordGame()
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea ref={textBoxRef} value={text} onChange={handleChange} disabled={!startGame}>
            {text}
            </textarea>
            <h3>Time reminaing:{timeRemain}</h3>
            <button disabled={startGame}  onClick={startClock}>Start</button>
            <h1>Word count: {count}</h1>
        </div>
    )
}

export default App
