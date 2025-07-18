import './App.css';
import Home from './components/Home';
import Booking from './components/Booking';
import ViewBooking from './components/ViewBooking';
import Nav from './components/Nav';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/view" element={<ViewBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
