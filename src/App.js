import React,{useEffect, useState} from "react"

function App() {
    const [text,setText] = useState("")
    const [count, setCount] = useState(0)
    const [timeRemain, setTimeRemain] = useState(5)

    function countWord(){
      const firstFilterWord = text.trim().split(" ")
      const secondFilterWord = firstFilterWord.filter(word => word !== "")
      setCount(secondFilterWord.length)
    }

    
    function handleChange(e) {
      const {value} = e.target
        setText(value)
    }

    useEffect(() => {
      if(timeRemain > 0){
        setTimeout(()=> setTimeRemain(prev => prev -1),1000)
      }
    },[timeRemain])
    
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea value={text} onChange={handleChange}>
            {text}
            </textarea>
            <h4>Time reminaing:{timeRemain}</h4>
            <button onClick={countWord}>Start</button>
            <h1>Word count: {count}</h1>
        </div>
    )
}

export default App
