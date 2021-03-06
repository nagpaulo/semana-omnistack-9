import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    
    const response = await api.post('/sessions',{ email });
    const { _id } = response.data;
    
    console.log(_id);
  }
   
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-Mail *</label>
          <input 
            id="email" 
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <button type="submit" className="btn"> Entrar </button>
        </form>
      </div>
    </div>
  );
}

export default App;
