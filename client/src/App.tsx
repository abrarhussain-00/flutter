import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import AllTweets from './views/AllTweets';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllTweets/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
