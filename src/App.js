import './App.css';
import data from "./data.json"

function App() {
  ///just needs event handlers for the create, edit and delete button and I believe we're done.

  const newData = data.map((books) => {
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
