import { useState,useEffect,useRef } from "react";

function useWordGame(){
    const COUNTING_TIME = 5
    const [text,setText] = useState("")
    const [count, setCount] = useState(0)
    const [timeRemain, setTimeRemain] = useState(COUNTING_TIME)
    const [startGame,setStartGame] = useState(false)
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
      textBoxRef.current.disabled()
      textBoxRef.current.focus()
    }
    
    function endGame(){
      setStartGame(false)
      setCount(countWord(text))
    }


    function handleChange(e) {
      const {value} = e.target
        setText(value)
    }

    return {textBoxRef,text,handleChange,startGame,timeRemain,startClock,count}
}

export default useWordGame