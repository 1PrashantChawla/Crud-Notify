import React from 'react'
// import Notes from './Notes';

const NoteItem = (props) => {
  const { note } = props;

  return (
    <div className='m-2 col-3'>


      <div class="card my-3" >
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description}</p>
          <a href="#" class="btn btn-primary">Click</a>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
