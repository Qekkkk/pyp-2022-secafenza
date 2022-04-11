import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Free from './page/Free';
import Profiles from './page/Profiles';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Free' element={<Free />} />
      <Route path='Profiles' element={<Profiles />} />
    </Routes>
  );
}

export default App;
