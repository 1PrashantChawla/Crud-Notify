import NoteContext from "./NoteContext";
import React, { useState } from 'react'


const NoteState = (props) => {
const host="http://localhost:8000";
const notesData=[]
const [notes,setNote]=useState(notesData)
// --------------------------ALLL CRUD FUNCTIONS-------
// ------Fetch notes-------
const getNotes=async()=>{
  // API CALL
  const response = await fetch(`${host}/api/userNotes/fetchAllNotes`, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNWRmNmY2M2QzY2Y0ZjU1MjMyYzc4In0sImlhdCI6MTY2MTMyOTI2M30.M2iNKB0Mi0iYrvioqUUa8Luj1EoLQSxXf8Y1kRcSeQc'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
   
}) 
const json=await response.json();
console.log(json);
setNote(json)


}
  // ------Add notes-------
  const addNote= async (title,description,tag)=>{
// API CALL

const response = await fetch(`${host}/api/userNotes/addNote`, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNWRmNmY2M2QzY2Y0ZjU1MjMyYzc4In0sImlhdCI6MTY2MTMyOTI2M30.M2iNKB0Mi0iYrvioqUUa8Luj1EoLQSxXf8Y1kRcSeQc'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify({title,description,tag})
}) 
// const json= response.json(); 
// note=null;

const note={
  "title": title,
  "description": description,
  "tag": tag,
  "__v": 0

}

setNote(notes.concat(note))
console.log("adding Note");

  }
  // ------delete notes-------
  const deleteNote=async(id)=>{

    // API CALL

    const response = await fetch(`${host}/api/userNotes/deleteNote/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNWRmNmY2M2QzY2Y0ZjU1MjMyYzc4In0sImlhdCI6MTY2MTMyOTI2M30.M2iNKB0Mi0iYrvioqUUa8Luj1EoLQSxXf8Y1kRcSeQc'
     
      },
      
  }) 


    // CLIENT LOGIC
    const newNotes=notes.filter((notes)=> notes._id!=id)//show only those note in which deleted note  id is is not present
  
    setNote(newNotes)
    
  }
  //------ edit notes-------
  const editNote=async (id,title,description,tag)=>{
    // API CALL

    const response = await fetch(`${host}/api/userNotes/updateNote/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwNWRmNmY2M2QzY2Y0ZjU1MjMyYzc4In0sImlhdCI6MTY2MTMyOTI2M30.M2iNKB0Mi0iYrvioqUUa8Luj1EoLQSxXf8Y1kRcSeQc'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title,description,tag})
  }) 
    const json= await response.json(); 
    // FOR  EDITING IN CLIENT

    // making a copy of notes
    let newNotes=JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      let element=newNotes[index];
      if(newNotes[index]._id===id){
        element.title=title;
        element.description=description;
        element.tag=tag;
        break;
      }
      
    }
    setNote(newNotes)
  }

  // -----------************--ALLL CRUD FUNCTIONS END--*****************-----



// RETURN STATEMENT OF COMPONENT
    return (
        // syntax 
        // if we wrap any code inside NoteState all the states will be available to the components inside it
        <NoteContext.Provider value={{notes,setNote,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState