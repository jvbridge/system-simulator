import React from 'react';
import './App.css';

import Header from './components/header/main';
import Footer from './components/footer/main';

import infoPage from './pages/info';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <infoPage />
      <Footer></Footer>
    </div>
  );
}

export default App;
