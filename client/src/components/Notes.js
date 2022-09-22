import React, { useContext, useEffect, useRef,useState } from 'react';
import NoteContext from '../context/notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = (props) => {

    const context = useContext(NoteContext)
    const { notes, getNotes,editNote } = context; //importing what we need using destructuring
    const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""})

    useEffect(() => {
        getNotes()
    }, [])
// -----refs-----
    const ref = useRef();
    const refClose = useRef();

    // ---Updating note ICON on client side-----
    const updateNote = (currentNote) => {
        ref.current.click()
       
        setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
    }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
     //    whatever properties are there in note will remain same except the name will be replaced by the input value bt the user
        //spread operator will only change the required field

        
     }
    //  ------UPDATE BUTTON -----
     const handleClick=(e)=>{
         e.preventDefault();// so that page doesn't reload
        //  ---for updating in backend----
         editNote(note.id,note.etitle,note.edescription,note.etag)
        //  ---frontend---
          
        
         refClose.current.click()// for closing when UPDATE btn is pressed
         props.showAlert("Succesfully Updated","success")
         console.log('update'); 
     }

    return (

        <>
            <AddNote />


            {/* modal */}
{/*display is none of this button  bcoz we are doing this by our custom update icon we have added use useref hook */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* fORM */}
                            <form className='my-3'>

                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" placeholder="Title must be at least 3 characters" minLength='3' className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} value={note.etitle}/>

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" placeholder="Description must be at least 5 characters" minLength="5" className="form-control" id="edescription" name='edescription' onChange={onChange} value={note.edescription}/>
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' onChange={onChange} value={note.etag}/>
                                </div>

                              
                            </form>
                            {/* fORM */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit"  disabled={note.etitle.length<5||note.edescription.length<3} className="btn btn-primary" onClick={handleClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
            <div className='row my-3'>
                    <div className='container mx-2'>
                        {/* if notes not available show this */}
                    {notes.length===0 && 'No Notes To Display'}
                    </div>

                {
                    notes.map((key) => {
                        return <NoteItem key={notes._id} note={key} updateNote={updateNote} />

                    })
                }
            </div>

        </>


    )
}

export default Notes
