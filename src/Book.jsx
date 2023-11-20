import React from 'react'
import withHoc from './withHoc'

function Book(value) {
    console.log("v",value)
  return (
    <div>Book ... {value.value}</div>
  )
}

export default withHoc(Book) 