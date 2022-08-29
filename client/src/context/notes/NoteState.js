import NoteContext from "./NoteContext";
import React, { useState } from 'react'


const NoteState = (props) => {
 const notesData=[
    {
      "_id": "6306136ccac9f38d5fb7ca87",
      "user": "6305df6f63d3cf4f55232c78",
      "title": "Note 2",
      "description": "Now i have created a end ponit for adding note ",
      "tag": "notes check22 22 ",
      "date": "2022-08-24T12:02:52.536Z",
      "__v": 0
    },
    {
      "_id": "6306136ccac9f38d5fb7ca87",
      "user": "6305df6f63d3cf4f55232c78",
      "title": "Note 2",
      "description": "Seconfd note description ",
      "tag": "notes check22 22 ",
      "date": "2022-08-24T12:02:52.536Z",
      "__v": 0
    },
    {
      "_id": "6306136ccac9f38d5fb7ca87",
      "user": "6305df6f63d3cf4f55232c78",
      "title": "Note 2",
      "description": "Seconfd note description ",
      "tag": "notes check22 22 ",
      "date": "2022-08-24T12:02:52.536Z",
      "__v": 0
    },
    {
      "_id": "6306136ccac9f38d5fb7ca87",
      "user": "6305df6f63d3cf4f55232c78",
      "title": "Note 2",
      "description": "lorem note description ",
      "tag": "notes check22 22 ",
      "date": "2022-08-24T12:02:52.536Z",
      "__v": 0
    }
  ]
  
  const [notes,setNote]=useState(notesData)


    return (
        // syntax 
        // if we wrap any code inside NoteState all the states will be available to the components inside it
        <NoteContext.Provider value={{notes,setNote}}>

            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState