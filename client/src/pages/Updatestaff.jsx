import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Updatestaff() {
  const [formData, setFormData] = useState({});
  const { staffId } = useParams(); // Access staffId parameter using useParams hook
  const { loading, error } = useSelector((state) => state.staff);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStaffDetails = async () => {
      try {
        const response = await axios.get(`/api/staff/${staffId}`);
        if (response.data) {
          setFormData(response.data); // Update formData only if response data is not empty
        } else {
          console.error('Empty response data');
        }
      } catch (error) {
        console.error('Error fetching staff details:', error);
      }
    };
  
    fetchStaffDetails();
  }, [staffId]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/staff/${staffId}`, formData);
      const data = res.data;
      toast.success(data.message);
    } catch (error) {
      console.error('Error updating staff:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Update Worker</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* Input fields to update staff details */}
        <input type="text" placeholder='Name' id='name' className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' value={formData.name || ''} onChange={handleChange} required />
        <input type="number" placeholder='Registration ID' id='id' className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' value={formData.id || ''} onChange={handleChange} required />
        <select name="type" id="type" value={formData.type || ''} className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' onChange={handleChange} required>
          <option value="" disabled>Type</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Driver">Driver</option>
          <option value="Labor">Labor</option>
        </select>
        {/* Additional input fields */}
        <input type="number" placeholder='Contact Number' id='number' className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' value={formData.number || ''} onChange={handleChange} required />
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' value={formData.email || ''} onChange={handleChange} required />
        <input type="text" placeholder='Address' id='address' className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' value={formData.address || ''} onChange={handleChange} required />
        <input type="date" placeholder='Join Date' id='joindate' className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' value={formData.joindate || ''} onChange={handleChange} required />
        <input type="text" placeholder='Shift' id='shift' className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' value={formData.shift || ''} onChange={handleChange} required />
        <input type="number" placeholder='License (Driver Only)' id='license' className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' value={formData.license || ''} onChange={handleChange} />
        <input type="text" placeholder='Username (Supervisor Only)' id='username' className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' value={formData.username || ''} onChange={handleChange} autoComplete="current-username" />
        <input type="password" placeholder="Password (Supervisor Only)" id="password" className="bg-slate-100 p-3 rounded-lg border-2 border-zinc-400" value={formData.password || ''} onChange={handleChange} autoComplete="current-password" />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
      {error && <p className="text-red-700 mt-5">{error}</p>}
    </div>
  );
}
