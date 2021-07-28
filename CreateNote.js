import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
      title:"",
      content:"",
    });
     const inputEvent = (event) =>{ 
        //  const value = event.target.value;  // user kya likh rha h 
        //  const name = event.target.name;  // user jo bhi likh rha hai value me ja kar store ho jayegi    
         
         const {name, value} = event.target; // object destructuring
         setNote((prevData) =>{     // jo bhi usestate ka data h wo setNote access kr sakta hai
            return{
                ...prevData,   // setNote k pass sara data aa chuka hai
                [name]: value,
            }

         });
         console.log(note); 
     };
    const addEvent = () =>{
      props.passNote(note);
      setNote({
           title:"",
           content:"",
      })
    };
     const expandIt = () =>{
         setExpand(true);
     };
     const batoNormal = () =>{
         setExpand(false);
     }
    return (
        <>
            <div className="create_note">
                <form>
               { expand?
                    <input type="text" 
                    value={note.title}
                    name="title"
                    placeholder="Title" 
                    onChange={inputEvent}  />
                    : null}
                    <textarea cols="" 
                    // rows="4" 
                    placeholder="Write A Note" 
                    value={note.content}
                    name="content"
                    onChange={inputEvent} 
                    onClick={expandIt}
                    onDoubleClick={batoNormal} >
                    </textarea>
                   { expand?
                     <Button onClick={addEvent}>
                      <AddIcon className="plus" />
                    </Button> :null}
                    
                </form>
            </div>
        </>
    )
}

export default CreateNote;
