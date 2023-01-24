// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<Welcome />} />
          <Route path='/home' element={<Home />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
