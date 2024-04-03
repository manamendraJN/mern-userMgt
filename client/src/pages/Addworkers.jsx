import { Link } from "react-router-dom";

export default function Addworkers() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Add Workers</h1>
      <from className='flex flex-col gap-4'>
        <input type="text" placeholder='Name' id='name' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="number" placeholder=' Registration  ID' id='id' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="text" placeholder='Type' id='type' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="text" placeholder='Contact Number' id='number' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="text" placeholder='Email' id='email' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="text" placeholder='Address' id='address' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="date" placeholder='Join Date' id='joindate' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="text" placeholder='Shift' id='shift' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="number" placeholder='License' id='license' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="text" placeholder='Username' id='username' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <input type="password" placeholder='Password' id='password' 
        className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400'/>

        <button className='bg-slate-700 text-white p-3 rounded-lg 
        uppercase hover:opacity-95'>Register</button>

      </from>
    </div>
  );
}
