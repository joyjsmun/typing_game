import React,{useEffect, useState,useRef} from "react"
import useTextArea from "./useTextArea"
import useTimeRemain from "./useTimeRemain"

function App() {
 
    const {text,setText,startGame,setStartGame,handleChange} = useTextArea()
    const {timeRemain, setTimeRemain,COUNTING_TIME} = useTimeRemain()

    const [count, setCount] = useState(0)
    const textBoxRef = useRef(null)
    


   useEffect(()=> {
    if(startGame && timeRemain > 0 ){
      setTimeout(() => {
        setTimeRemain(prev => prev -1 )
        countWord()
      }, 1000);
    }else if(timeRemain === 0){
      endGame()
    }

  },[timeRemain,startGame])
   

    function countWord(text){
      const firstFilterWord = text.trim().split(" ")
      return firstFilterWord.filter(word => word !== "").length
      
    }

    
    function startClock(){
      setStartGame(true)
      setTimeRemain(COUNTING_TIME)
      setCount(0)
      setText("")
      textBoxRef.current.disabled = false
      textBoxRef.current.focus()
    }
    
    function endGame(){
      setStartGame(false)
      setCount(countWord(text))
    }


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
