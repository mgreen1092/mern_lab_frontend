import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Homepage = () => {
    const [input, setInput] = useState()

  const getBooks = () => {
    axios.get("http://localhost:4000/api/library/").then(response => {
      setInput(response.data)
      console.log(response.data)
    })
  }
  useEffect(() => {
    getBooks()
  }, [])

  if (input === undefined) return;

  const newData = input.map((books) => {
    return (
      <div>
        <h1>{books.title}<button className='Buttons'>edit</button><button className='Buttons'>delete</button></h1>
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