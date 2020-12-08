import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note,setNote]=useState({
        title:"",
        content:""
    })

    const [isExpanded,setIsExpanded]=useState(false);

    function noteChanged(event){
        const {name,value}=event.target
        setNote((prevNote) => {
            return{
                ...prevNote,[name]:value
            }
        })
    }

    function formSubmit(event) { 
        props.onAdd(note);
        event.preventDefault();
        document.getElementById("form").reset();
    }

  return (
    <div>
      <form id="form" onSubmit={formSubmit}>
        {isExpanded && <input name="title" onChange={noteChanged} placeholder="Title" required autoComplete="off"/>}
        <textarea  onClick ={() => setIsExpanded(true)} name="content" onChange={noteChanged} placeholder="Take a note..." rows={isExpanded?"3":"1"} required />
        <Zoom in={isExpanded}>
        <Fab className="Fab" type="submit"><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;