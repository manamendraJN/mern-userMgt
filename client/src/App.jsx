import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Addworkers from './pages/Addworkers';
import Workerlist from './pages/Workerlist';
import Addshift from './pages/Addshift';
import Shiftlist from './pages/Shiftlist';
import Login from './pages/login';
import Staffmanagement from './pages/Staffmanagement';
import Header from './component/Header';

export default function App() {
  return (
    <BrowserRouter>
    {/* header */}
    <Header/>
      <Routes>
     
        <Route path="/" element={<Staffmanagement/>} />
        <Route path="/Addworkers" element={<Addworkers/>} />
        <Route path="/Workerlist" element={<Workerlist/>} />
        <Route path="/Addshift" element={<Addshift/>} />
        <Route path="/Shiftlist" element={<Shiftlist/>} />
        <Route path="/Login" element={<Login/>} />
        
      </Routes>
    </BrowserRouter>
  );
}
