import React, { useContext,useEffect } from 'react'

import NoteContext from '../context/notes/NoteContext'

function About(){
    
    const a=useContext(NoteContext)
    // useEffect is used whenever we are updating something 
    // it will accept a function that changes the code and takes other parameter as an array ̀
    // use effect is like componentDidMount Of Class component
  useEffect(()=>{a.update(5000)},[])    //will update name and age after 5 sec

    return(
       <>
       
          <div>

            My name is {a.state.name}
          </div>
            <div>

            My age is  {a.state.age}
            </div>
          
       
       </>
        
    )

}
export default About;