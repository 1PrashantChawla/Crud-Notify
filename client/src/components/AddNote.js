import React, { useState, useEffect, useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
    // CREATING ADD NOTE CONTEXT AND IMPORTING ADD NOTE FUNCTION FROM IT.
    const context = useContext(NoteContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
        //    whatever properties are there in note will remain same except the name will be replaced by the input value bt the user
        //spread operator will only change the required field
    }
    const handleClick = (e) => {
        e.preventDefault();// so that page doesn't reload

        addNote(note.title, note.description, note.tag);
       
        // after adding the notes the input should be clear;
        setNote( {title: "", description: "", tag: "" })

    }


    return (
        <div>

            <div className='container my-2'>

                <h1>Add Note</h1>
                {/* form input for adding the data */}
                <form className='my-3'>

                    {/* title */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" placeholder="Title must be at least 3 characters" minLength={3} className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}  value={note.title} required/>

                    </div>

                    {/* description */}
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" placeholder="Description must be at least 5 characters" minLength={5} className="form-control" id="description" name='description' onChange={onChange} value={note.description} required/>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                    </div>
                    {/*btn  */}
                    <button type="submit" disabled={note.title.length<5||note.description.length<3} className="btn btn-primary" onClick={handleClick}>Add</button>
                </form>

            </div>

        </div>
    )
}

export default AddNote
