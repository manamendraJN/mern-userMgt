import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { registerStart, registerSuccess, registerFailure } from '../redux/staff/staffSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Addworkers({ navigateToWorkerList }) {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.staff);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(registerStart());
      const res = await axios.post('/api/auth/register', formData);
      const data = res.data;
      if (data.success === false) {
        dispatch(registerFailure(data.message));
        return;
      }
      dispatch(registerSuccess(data));
      setFormData({});
      toast.success(data.message);
      navigateToWorkerList();
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Add Worker</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Name' id='name'
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.name || ''}
          onChange={handleChange}
          autoComplete="current-name"
          required
        />

        <input type="number" placeholder='Registration ID' id='id'
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.id || ''}
          onChange={handleChange}
          autoComplete="current-id"
          required
        />

        <select
          name="type"
          id="type"
          value={formData.type || ''}
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          onChange={handleChange}
          autoComplete="current-type"
          required
        >
          <option value="" disabled>Type</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Driver">Driver</option>
          <option value="Labor">Labor</option>
        </select>

        <input type="number" placeholder='Contact Number' id='number'
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.number || ''}
          onChange={handleChange}
          autoComplete="current-number"
          required
        />

        <input type="email" placeholder='Email' id='email'
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.email || ''}
          onChange={handleChange}
          autoComplete="current-email"
          required
        />

        <input type="text" placeholder='Address' id='address'
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.address || ''}
          onChange={handleChange}
          autoComplete="current-address"
          required
        />

        <input type="date" placeholder='Join Date' id='joindate'
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.joindate || ''}
          onChange={handleChange}
          autoComplete="current-joindate"
          required
        />

        <input type="text" placeholder='Shift' id='shift'
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.shift || ''}
          onChange={handleChange}
          autoComplete="current-shift"
          required
        />

        <input type="number" placeholder='License (Driver Only)' id='license'
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.license || ''}
          onChange={handleChange}
          autoComplete="current-license"
        />

        <input type="text" placeholder='Username (Supervisor Only)' id='username'
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.username || ''}
          onChange={handleChange}
          autoComplete="current-username"
        />

        <input
          type="password"
          placeholder="Password (Supervisor Only)"
          id="password"
          className="bg-slate-100 p-3 rounded-lg border-2 border-zinc-400"
          value={formData.password || ''}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          {loading ? 'Loading...' : 'Register'}
        </button>
      </form>
      {error && <p className="text-red-700 mt-5">{error}</p>}
    </div>
  );
}
