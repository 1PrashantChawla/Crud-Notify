import React from 'react';
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(NoteContext)
    const {notes,addNote}=context;
    return (
      
            <>
            <AddNote/>
        <div className='row my-3'>
       

                {
                    notes.map((key) => {
                        return <NoteItem key={notes._id} note={key}/>
                        
                    })
                }
                </div>

                </>

        
    )
}

export default Notes
