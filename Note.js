import React from 'react';
// import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
const Note = (props) => {
    const deleteNote = () =>{
        props.deleteItem(props.id); // user ne kis note ko delete kiya tha
    };
    return (
        <>
           <div className="note">
               <h1> <i class="fas fa-pen-alt"></i> {props.title}</h1>
               <br />
               <p>  <i class="fas fa-edit"></i> {props.content}</p>
               <button className="btn" onClick={deleteNote}  >
                <DeleteIcon className="delete" />
               </button>
               
           </div> 
        </>
    )
}

export default Note;