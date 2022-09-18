import React from 'react'
// import Notes from './Notes';
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
  const { note ,updateNote} = props;
  const context = useContext(NoteContext)
  const {deleteNote}=context;


  return (
    <div className='m-2 col-3'>


      <div className="card my-3" >
     
        <div className="card-body">
          
          <div className='d-flex align-items-center'>
          <h4 className="card-title me-4">{note.title}</h4>

          {/* delete button */}
          <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          {/* update button */}
          <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>updateNote(note)}></i>

          </div>
          <p className="card-text">{note.description}</p>
          
        </div>
      </div>
    </div>
  )
}

export default NoteItem
