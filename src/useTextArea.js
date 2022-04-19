import {useState} from "react"

function useTextArea(){
    const [text,setText] = useState("")
    const [startGame,setStartGame] = useState(false)


    function handleChange(e) {
        const {value} = e.target
          setText(value)
      }
  
      return {text,setText,startGame,setStartGame,handleChange}
}

export default useTextArea