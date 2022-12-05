import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
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
  return <div>
    <button className='Create'>create</button>
    {newData}
  </div>
}

export default App;
