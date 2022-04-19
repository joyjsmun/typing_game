import { useState } from "react";

function useTimeRemain(){
    const COUNTING_TIME = 5
    const [timeRemain, setTimeRemain] = useState(COUNTING_TIME)

    return {timeRemain,setTimeRemain,COUNTING_TIME}
}

export default useTimeRemain