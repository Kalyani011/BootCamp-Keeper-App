import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({title:"", content:""});
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event){
    const {name, value} = event.target;
    setNote( (prevValue) => {
      return {
        ...prevValue,
        [name] : value
      }
    });
  }

  function handleClick(){
      setExpanded(true);
  }

  return (
    <div>
      <form class="create-note">
        { isExpanded && <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/> }
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? "3":"1"} value={note.content} onChange={handleChange} onClick={handleClick}/>
        <Zoom in={isExpanded}>
          <Fab onClick={ (event) =>
            {
              props.addNote(note);
              setNote({title:"", content:""});
              setExpanded(false);
              event.preventDefault();
            }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
