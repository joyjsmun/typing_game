import React,{useState} from "react"

function App() {
    const [text,setText] = useState("")
    const [count, setCount] = useState(0)
    
    function countWord(event){
       setCount((text.split(' ').length))
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
            <h4>Time reminaing: ???</h4>
            <button onClick={countWord}>Start</button>
            <h1>Word count: {count}</h1>
        </div>
    )
}

export default App
