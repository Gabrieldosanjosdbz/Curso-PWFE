import React from 'react';
import './App.css';

import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';

function App(){
  return(
    <div className='App'>
      <Header />
      <Main />
      <Footer />    
    </div>
  );
}

export default App;