import NoteContext from "./NoteContext";
import React, { useState } from 'react'


const NoteState = (props) => {
 const notesData=[
    {
      "_id": "6306136ccac9f38ed5fb7c11a87",
      "user": "6305df6f63d3cf4f55232c78",
      "title": "Note 2",
      "description": "Now i have created a end ponit for adding note ",
      "tag": "notes check22 22 ",
      "date": "2022-08-24T12:02:52.536Z",
      "__v": 0
    },
    {
      "_id": "6306136ccaec9f3118d5fb7ca87",
      "user": "6305df6f63d3cf4f55232c78",
      "title": "Note 2",
      "description": "Seconfd note description ",
      "tag": "notes check22 22 ",
      "date": "2022-08-24T12:02:52.536Z",
      "__v": 0
    },
    {
      "_id": "630613e6c11cac9f38d5fb7ca87",
      "user": "6305df6f63d3cf4f55232c78",
      "title": "Note 2",
      "description": "Seconfd note description ",
      "tag": "notes check22 22 ",
      "date": "2022-08-24T12:02:52.536Z",
      "__v": 0
    },
    {
      "_id": "6306136ccac9f38d5f11b7eca87",
      "user": "6305df6f63d3cf4f55232c78",
      "title": "Note 2",
      "description": "lorem note description ",
      "tag": "notes check22 22 ",
      "date": "2022-08-24T12:02:52.536Z",
      "__v": 0
    }
  ]
  
  const [notes,setNote]=useState(notesData)



  // Add note

  const addNote=(title,description,tag)=>{
// api call required
// note=null;

const note={
  "_id": "6306136ccacssfaf38d5f11b7eca87",
  "user": "6305df6f63d3cf4f55232c78",
  "title": title,
  "description": description,
  "tag": tag,
  "date": "2022-08-24T12:02:52.536Z",
  "__v": 0

}
setNote(notes.concat(note))
console.log("adding Note");

  }
  // delete note
  const deleteNote=(id)=>{
    const newNotes=notes.filter((notes)=> notes._id!=id)//show only those note in which deleted note is is not present
  
    setNote(newNotes)
    
  }
  // edit note
  const editNote=(id,description,title,tag)=>{

    
  }

    return (
        // syntax 
        // if we wrap any code inside NoteState all the states will be available to the components inside it
        <NoteContext.Provider value={{notes,setNote,addNote,deleteNote,editNote}}>

            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState