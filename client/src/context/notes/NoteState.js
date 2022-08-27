import NoteContext from "./NoteContext";
import React, { useState } from 'react'


const NoteState = (props) => {
    const S1 = {
        name: "prashant",
        age: 21


    }
   const [state,setstate] =useState(S1)
  const update=(time)=>{
    setTimeout(() => {
        setstate({
            name:"madhav",
            age:16
        })
        
    }, time);
   }

    return (
        // syntax 
        // if we wrap any code inside NoteState all the states will be available to the components inside it
        <NoteContext.Provider 
        value={
            
            {
            state:state,
            update:update}
            
            }>

            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState