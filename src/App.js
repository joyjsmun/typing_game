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
    }

  },[timeRemain,startGame])
   

    function countWord(){
      const firstFilterWord = text.trim().split(" ")
      const secondFilterWord = firstFilterWord.filter(word => word !== "")
      setCount(secondFilterWord.length)
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
            <button onClick={()=> setStartGame(true)}>Start</button>
            <h1>Word count: {count}</h1>
        </div>
    )
}

export default App
