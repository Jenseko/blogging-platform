import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
