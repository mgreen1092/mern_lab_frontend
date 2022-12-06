import './App.css';
import Create from './components/Create';
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';
import Edit from './components/Edit'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState({
    title: '',
    author: '',
    description: ''
  })
  const [allBooks, setAllBooks]=useState()
  return (<div>
    <Routes>
      <Route path='/' element={<Homepage input={input} setInput={setInput} allBooks={allBooks} setAllBooks={setAllBooks}/>}></Route>
      <Route path='/create' element={<Create input={input} setInput={setInput}/>}></Route>
      <Route path='/edit/:id' element={<Edit input={input} setInput={setInput}/>}></Route>
    </Routes>
  </div>)
}

export default App;
