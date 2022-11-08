import React from 'react';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import InfoPage from './pages/info';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <InfoPage></InfoPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
