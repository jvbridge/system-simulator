import React, { useState } from 'react';
import './App.css';

import { Button, Modal } from 'react-bootstrap';

// custom components
import Header from './components/header';

// pages
import InfoPage from './pages/info';
import MainPage from './pages/mainPage';

function App() {
  const [infoVisible, setInfoVisible] = useState(false);

  const showInfo = () => setInfoVisible(true);
  const hideInfo = () => setInfoVisible(false);

  return (
    <div className="App">
      <Modal show={infoVisible} onHide={hideInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Game Balance Simulator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InfoPage />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideInfo}>Got it!</Button>
        </Modal.Footer>
      </Modal>
      <Header showInfo={showInfo}></Header>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
