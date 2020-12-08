import React from "react"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Note(props) { 

    function handleClicked(){
        // console.log(id);
        props.onDelete(props.id)
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClicked} ><DeleteForeverIcon/></button>

    </div>
}

export default Note