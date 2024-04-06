import { useState } from "react";
import { Link, json } from "react-router-dom";

export default function Addworkers() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value});

  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault ();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/register', {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }

      
      
    } catch (error) {
      setLoading(false);
      setError(true);
    }

    
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Add Workers</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Name' id='name' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

        <input type="number" placeholder=' Registration  ID' id='id' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

<select 
    name="type" 
    id="type" 
    value={formData.type || ""} 
    className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' 
    onChange={handleChange}
>
    <option value="" disabled>Type</option> 
    <option value="Supervisor">Supervisor</option> 
    <option value="Driver">Driver</option> 
    <option value="Labor">Labor</option>  
</select>

        {/* <select name="type" id="type" defaultValue="" className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400' onChange={handleChange}>
        <option value="" disabled>Type</option> 
        <option value="Supervisor">Supervisor</option> 
        <option value="Driver">Driver</option> 
        <option value="Labor">Labor</option>  
        </select> */}

        {/* <input type="text" placeholder='Type' id='type' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        /> */}

        <input type="number" placeholder='Contact Number' id='number' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

        <input type="email" placeholder='Email' id='email' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

        <input type="text" placeholder='Address' id='address' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

        <input type="date" placeholder='Join Date' id='joindate' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

        <input type="text" placeholder='Shift' id='shift' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

        <input type="number" placeholder='License (Driver Only)' id='license' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

        <input type="text" placeholder='Username (Supervisor Only)' id='username' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

        <input type="password" placeholder='Password (Supervisor Only)' id='password' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'
        onChange={handleChange}
        />

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg 
        uppercase hover:opacity-95'>
          {loading ? 'Loading...' : 'Register'}
        </button>

      </form>
      <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>
    </div>
  );
}
