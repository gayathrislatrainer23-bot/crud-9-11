
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/register' element ={<Register/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/home' element ={<Home/>}/>
      <Route path='/profile/:id' element ={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
