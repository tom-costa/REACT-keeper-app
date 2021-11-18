import React, {useState} from "react"
import ReactDOM from "react-dom"


function Note(props) {

    const [isHovered, setHover] = useState(false)

    function handleHover(){
        setHover(true)
        console.log("hovered")
    }

    function noHover(){
        setHover(false)
    }
    return (
        <div className="note" 
        style={{backgroundColor: isHovered ? "#fab1a0" : "white"}}
        onMouseOver={handleHover}
        onMouseOut={noHover}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Note