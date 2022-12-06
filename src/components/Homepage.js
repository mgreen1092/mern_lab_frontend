import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const deleteButton = document.getElementById('delete')
const editButton = document.getElementById('edit')

const Homepage = (props) => {

  const getBooks = () => {
    axios.get("http://localhost:4000/api/library/").then(response => {
      props.setAllBooks(response.data)
      console.log(response.data)
    })
  }
  console.log(props.allBooks)
  useEffect(() => {
    getBooks()
  }, [])

  if (props.allBooks === undefined) return;

  const deleteHandler =  (bookId) => {
    console.log(bookId)
    const response =  axios.delete(`http://localhost:4000/api/library/delete/${bookId}`)
  }
  

  const newData = props.allBooks.map((books, key) => {
    console.log(books._id)
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