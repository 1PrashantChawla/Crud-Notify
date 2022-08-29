import React from 'react';
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(NoteContext)
    const {notes,setNote}=context;
    return (
      
            <div className='container my-3 '>

        <div className='d-flex flex-row'>

                {
                    notes.map((key) => {
                        return <NoteItem  note={key}/>
                        
                    })
                }
                </div>


            </div>
    )
}

export default Notes
