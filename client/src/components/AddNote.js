import React,{useState,useEffect,useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = () => {
    const context = useContext(NoteContext)
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:"default"})

    const onChange=(e)=>{
       setNote({...note,[e.target.name]:e.target.value})//spread operator will only change the required field
    }
    const handleClick=(e)=>{
        e.preventDefault();// so that page doesn't reload
        
        addNote(note.title,note.description,note.tag);
       
    }


    return (
        <div>

            <div className='container my-2'>

                <h1>Add Note</h1>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlhtmlfor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlfor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add</button>
                </form>

            </div>

        </div>
    )
}

export default AddNote
