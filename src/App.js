import './App.css';
import Create from './components/Create';
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';

function App() {
  return (<div>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/create' element={<Create />}></Route>
    </Routes>
  </div>)
}

export default App;
