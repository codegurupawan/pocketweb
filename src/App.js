// import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import { auth } from './components/firebase';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';

function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName("");
      }
      console.log(user);
    })
  })

  return (
    <div className="App">
      
 
      <BrowserRouter>

        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<Welcome />} />
          <Route path='/home' element={<Home user={userName} />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
