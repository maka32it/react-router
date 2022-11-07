import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AboutPage1 from "./routes/AboutPage1"
import OffersPage from "./routes/OffersPage"
import ContactPage from "./routes/ContactPage"
import Board from "./components/board/Board"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/about' element={<AboutPage1 />}></Route>
      <Route path='/offers' element={<OffersPage/>}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path='/board' element={<Board />}></Route>
    </Routes>
  </BrowserRouter>
    
  
);


