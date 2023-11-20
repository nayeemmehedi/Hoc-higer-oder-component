import React, { useState } from 'react'
import withHoc from './withHoc'

function Book({book,setBook}) {
   

    
  return (
    <div>
        value = {book}
        <br /><hr />
        <input type="text" onChange={(e)=> setBook(e.target.value)} />
       
    </div>
  )
}

export default withHoc(Book) 