import React,{useEffect, useState} from "react"

function App() {
    const [text,setText] = useState("")
    const [count, setCount] = useState(0)
    const [timeRemain, setTimeRemain] = useState(5)
    const [startGame,setStartGame] = useState(false)
    


   useEffect(()=> {
    if(startGame && timeRemain > 0 ){
      setTimeout(() => {
        setTimeRemain(prev => prev -1 )
        countWord()
      }, 1000);
    }else if(timeRemain === 0){
      setStartGame(false)
      setCount(countWord(text))
    }

  },[timeRemain,startGame])
   

    function countWord(text){
      const firstFilterWord = text.trim().split(" ")
      return firstFilterWord.filter(word => word !== "").length
      
    }

    
    function startClock(){
      setStartGame(true)
      setTimeRemain(5)
      setCount(0)
      setText("")
    }


    function handleChange(e) {
      const {value} = e.target
        setText(value)
    }

    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea value={text} onChange={handleChange}>
            {text}
            </textarea>
            <h3>Time reminaing:{timeRemain}</h3>
            <button onClick={startClock}>Start</button>
            <h1>Word count: {count}</h1>
        </div>
    )
}

export default App
