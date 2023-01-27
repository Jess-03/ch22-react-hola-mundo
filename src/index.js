import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NombreCompleto } from './components/NombreCompleto';
import Mascota from './components/Mascota';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NombreCompleto   name="Jess" age={26} show={true}/>
    <Mascota          name="Mia"  age={5}  show={true}/>
    <NombreCompleto   name="Viri"  age={23} show={false}/>
    <NombreCompleto   name= "Ollie" age={14} show={false}/>
  </React.StrictMode>
);
