import React, {FC}from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';

const App : FC = () => {
  return (
    <div>
      <Contador></Contador>
    </div>
  );
}

export default App;
