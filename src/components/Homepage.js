import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const deleteButton = document.getElementById('delete')
const editButton = document.getElementById('edit')

const Homepage = (props) => {

  const getBooks = () => {
    axios.get("https://mernlab.fly.dev/api/library/").then(response => {
      props.setAllBooks(response.data)
    })
  }
  useEffect(() => {
    getBooks()
  }, [])

  if (props.allBooks === undefined) return;

  const deleteHandler =  (bookId) => {
    const response =  axios.delete(`https://mernlab.fly.dev/api/library/delete/${bookId}`).then(response => {
      props.setAllBooks(response.data)
    })
  }
  

  const newData = props.allBooks.map((books, key) => {
    return (
      <div key={key}>
        <h1>{books.title}<Link to = {`/edit/${books._id}`}><button className='Buttons' id="edit" >edit</button></Link><button className='Buttons' onClick={() => deleteHandler (books._id)} >delete</button></h1>
        <p>{books.author}</p>
        <p>{books.description}</p>
      </div>
    )
  })
  return (<div>
    <Link to='/create'><button className='Create'>create</button></Link>
    {newData}
  </div>)
}


export default Homepage