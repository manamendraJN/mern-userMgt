import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Addworkers from './pages/Addworkers';
import Workerlist from './pages/Workerlist';
import Addshift from './pages/Addshift';
import Shiftlist from './pages/Shiftlist';
import Staffmanagement from './pages/Staffmanagement';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Staffmanagement/>} />
        <Route path="/Addworkers" element={<Addworkers/>} />
        <Route path="/Workerlist" element={<Workerlist/>} />
        <Route path="/Addshift" element={<Addshift/>} />
        <Route path="/Shiftlist" element={<Shiftlist/>} />
      </Routes>
    </BrowserRouter>
  );
}
