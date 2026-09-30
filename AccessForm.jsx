import { useEffect, useRef } from "react";

function AccessForm(){

    const inputRef =useRef(null)
    const topRef =useRef(null)


    useEffect(()=>{
    inputRef.current.focus()

    },[])

     const clickHandler=()=>{
        topRef.current.scrollIntoView({ behavior: 'smooth' })
     }

    return(
        <div style={{ height: "2000px" }}>
            <h1 ref={topRef}>Page Top</h1>

            <input type="text" ref={inputRef} />

           <button onClick={clickHandler}>Scroll to Top</button>
        </div>
    )

}

export default AccessForm;