// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addworkers from './pages/Addworkers';
import Workerlist from './pages/Workerlist';
import Addshift from './pages/Addshift';
import Shiftlist from './pages/Shiftlist';
import Login from './pages/login';
import Staffmanagement from './pages/Staffmanagement';
import Header from './component/Header';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import Updatestaff from './pages/Updatestaff';
import Updateshift from './pages/Updateshift';

export default function App() {
  return (
    <Router>
      <Header />
      <ToastContainer /> {/* Add ToastContainer here */}
      <Routes>
        <Route path="/" element={<Staffmanagement />} />
        <Route path="/Addworkers" element={<Addworkers />} />
        <Route path="/Workerlist" element={<Workerlist />} />
        <Route path="/Updatestaff/:staffId" element={<Updatestaff />} />
        <Route path="/Updateshift/:shiftId" element={<Updateshift />} /> {/* Use element prop */}
        <Route path="/Addshift" element={<Addshift />} />
        <Route path="/Shiftlist" element={<Shiftlist />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}
