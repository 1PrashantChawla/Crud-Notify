import React,{useState,useEffect,useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = () => {
    // CREATING ADD NOTE CONTEXT AND IMPORTING ADD NOTE FUNCTION FROM IT.
    const context = useContext(NoteContext)
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:"default"})

    const onChange=(e)=>{
       setNote({...note,[e.target.name]:e.target.value})
    //    whatever properties are there in note will remain same except the name will be replaced by the input value bt the user
       //spread operator will only change the required field
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
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" placeholder="Title must be at least 3 characters" minlength="3" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
                      
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" placeholder="Description must be at least 5 characters" minlength="5" className="form-control" id="description" name='description' onChange={onChange}/>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text"  className="form-control" id="tag" name='tag' onChange={onChange}/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add</button>
                </form>

            </div>

        </div>
    )
}

export default AddNote
