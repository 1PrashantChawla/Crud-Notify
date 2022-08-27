import React from 'react';
import {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

function Home() {
  const a=useContext(NoteContext)
  return (
    <div>
        Home hello 
      
    </div>
  )
}

export default Home
