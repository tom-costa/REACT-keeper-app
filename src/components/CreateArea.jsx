import React, { useState } from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { TramRounded } from "@material-ui/icons";

function CreateArea (props) {

    // Consts to set the visibility state of the new note's title
    // const [isVis, setIsVis] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        // Destructure the Object. This format will create 2 consts: "event.target.name" & "event.target.value"
        const { name, value} = event.target
        setNote(prevNote => {
            return {            // Return a new object, with 
                ...prevNote,   // the PREVIOUS note and 
                [name]: value   // this will also add a new name & value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note)
        event.preventDefault()  // This is to STOP the page from re-rendering/ re-freshing when the button is clicked.

        setNote({
            title:"",
            content:""
        })
    }

    // Function to Reveal the new note title when clicking to add a note.
    // function handleClick() {
    //     setIsVis( (prevVis) => {
    //         return !prevVis
    //     })
    // }

    function expand(){
        setIsExpanded(true)
    }

    return(
        <div>
            <form className="create-note">
            {isExpanded ? 
                <input value={note.title} onChange={handleChange} name="title" placeholder="Title" /> : null }
                <textarea value={note.content} onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1}/>
                <input  onChange={handleChange} style={{display: isExpanded ? "block" : "none"}} name="tag" placeholder="tag" />

                <Zoom in={isExpanded ? true : false} >
                <Fab onClick={submitNote} >
                <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
        )
}

export default CreateArea