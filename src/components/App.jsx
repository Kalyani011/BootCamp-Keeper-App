import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

function App(){
  const [notes, setNotes] = useState([]);

  function addNewNote(note){
    setNotes((prevValue) => {
      return [...prevValue, note];
    })
  }

  function deleteNote(id){
    setNotes( (prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNewNote}/>
      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} handleClick={deleteNote} />
      })}
      <Footer />
    </div>
  )
}

export default App;
