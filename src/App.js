import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.scss';
import Header from './components/header/header';
import Card from './components/cards/card';
import {data} from './data'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Card data={data}/>
    </div>
    
  )
}

export default App
