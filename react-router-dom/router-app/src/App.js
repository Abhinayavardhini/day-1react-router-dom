import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Leaves from './components/Leaves';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signin></Signin>}></Route>
    <Route path="/Signup" element={<Signup></Signup>}></Route>
    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    <Route path="/tasks" element={<Tasks></Tasks>} ></Route>
    <Route path="/leaves" element={<Leaves></Leaves>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
