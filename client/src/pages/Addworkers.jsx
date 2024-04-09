import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { registerStart, registerSuccess, registerFailure } from '../redux/staff/staffSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Addworkers() {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state?.staffDetails || {});
  const { loading, error } = useSelector((state) => state.staff);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(registerStart());
      let url = '/api/auth/register';
      let method = 'POST';
      
      // If staff details are provided, it's in update mode
      if (location.state?.staffDetails) {
        url = '/api/auth/update'; // Adjust the endpoint for updating
        method = 'PUT';
      }

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      
      if (data.success === false) {
        dispatch(registerFailure(data.message)); // Pass the error message to the failure action
        return;
      }
      
      dispatch(registerSuccess(data));
      setFormData({});

      // Show toast message when staff is successfully created
      toast.success('New staff member added successfully!');
      
    } catch (error) {
      dispatch(registerFailure(error.message)); // Pass the error message to the failure action
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>{location.state?.staffDetails ? 'Update Worker' : 'Add Worker'}</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* Form fields */}
        <input type="text" placeholder='Name' id='name' 
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.name || ''}
          onChange={handleChange}
        />

        <input type="number" placeholder='Registration ID' id='id' 
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.id || ''}
          onChange={handleChange}
        />

        <select 
          name="type" 
          id="type" 
          value={formData.type || ''} 
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' 
          onChange={handleChange}
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
        />

        <input type="email" placeholder='Email' id='email' 
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.email || ''}
          onChange={handleChange}
        />

        <input type="text" placeholder='Address' id='address' 
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.address || ''}
          onChange={handleChange}
        />

        <input type="date" placeholder='Join Date' id='joindate' 
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.joindate || ''}
          onChange={handleChange}
        />

        <input type="text" placeholder='Shift' id='shift' 
          className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
          value={formData.shift || ''}
          onChange={handleChange}
        />

        {!location.state?.staffDetails && (
          <>
            <input type="number" placeholder='License (Driver Only)' id='license'
              className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
              value={formData.license || ''}
              onChange={handleChange}
            />

            <input type="text" placeholder='Username (Supervisor Only)' id='username'
              className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
              value={formData.username || ''}
              onChange={handleChange}
            />

            <input type="password" placeholder='Password (Supervisor Only)' id='password'
              className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
              value={formData.password || ''}
              onChange={handleChange}
            />
          </>
        )}

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          {loading ? 'Loading...' : 'Save'}
        </button>
      </form>
      {/* Display error message if there's an error */}
      {error && <p className="text-red-700 mt-5">{error}</p>}
    </div>
  );
}
