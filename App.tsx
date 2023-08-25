import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VtxPage } from './pages/Vtx/vtxPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <VtxPage/>
      <Footer/>
    </div>
  );
}

export default App;
