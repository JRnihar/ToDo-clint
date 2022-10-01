import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Navbar/Header';
import EditTask from './Components/TodoFrom/EditTask';
import ToData from './Components/TodoFrom/ToData';
import TodoFrom from './Components/TodoFrom/TodoFrom';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<TodoFrom></TodoFrom>}></Route>
        <Route path='editTask/:id' element={<EditTask></EditTask>}></Route>
        <Route path='/todoData' element={  <ToData></ToData>}></Route>
      </Routes>
  
    </div >
  );
}

export default App;
