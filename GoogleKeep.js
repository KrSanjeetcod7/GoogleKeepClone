import React from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';
import { useState } from 'react';

const GoogleKeep = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) =>{
      // alert('I Am Clicked');
      setAddItem((prevData)=>{
        return [...prevData, note];  //user ne jo kuch bhi likha h wo sab yaha fetch ho jayega array me
        // note me jo bhi user likh rha h wo mujhe [note] me mil jayega
      });
      console.log(note);
  }
  const onDelete = (id) =>{
    setAddItem((oldData) =>
      oldData.filter((curData, indx) => {
         return indx !== id;
      })
    )

  }
    return (
        <>
          <Header /> 
          {/* //yaha pe maine ek props pass kiya */}
          <CreateNote passNote = {addNote} />    
  
          {
            addItem.map((val, index) =>{
              return (<Note 
              key={index}
              id={index} 
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
              />
              );
            })
          }
          <Footer /> 
        </>
    )
}

export default GoogleKeep;
