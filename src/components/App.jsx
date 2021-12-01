import React, {useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"
// import notes from "../notes"
// import ReactDOM from "react-dom"
// import { objectTypeSpreadProperty } from "@babel/types"



function App() {
    // We need these consts to give them state.
    // The initial state for the notes is an empty array
    const [notes, setNotes] = useState([])

    function addNote(newNote) { 
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }
    
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id
            })
        })
        console.log(id)
    }

    return (
        <div>
            <Header />

            {/* {newNotes.map((newNote) => ( */}

            <CreateArea 
            onAdd={addNote}
            />

            {/* Use the map function to loop through each noteItem
            As map takes a up to 3 params, you can pass both the noteItem AND index number, 
            which you can then use as a unique identifier for "key" and "id" props. */}

            {notes.map((noteItem, index) => {
                return<Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            })}

            <Footer />
        </div>
    )
};

export default App