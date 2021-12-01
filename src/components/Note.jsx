import React, {useState} from "react"
import DeleteIcon from '@material-ui/icons/Delete';
// import ReactDOM from "react-dom"


function Note(props) {

    const [isHovered, setHover] = useState(false)

    function handleHover(){
        setHover(true)
        console.log("hovered")
    }

    function noHover(){
        setHover(false)
    }

    function handleClick(){
        props.onDelete(props.id)
    }


    return (
        <div className="note" 
        style={{backgroundColor: isHovered ? "#fab1a0" : "white"}}
        onMouseOver={handleHover}
        onMouseOut={noHover}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
            <DeleteIcon />
            </button>
        </div>
    )
}

export default Note