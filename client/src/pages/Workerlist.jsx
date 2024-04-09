import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Workerlist() {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get('/api/staff/all');
      setStaffList(response.data);
    } catch (error) {
      console.error('Error fetching staff list:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm('Are you sure you want to delete this staff member?');
      if (confirmed) {
        await axios.delete(`/api/staff/${id}`);
        // Remove the deleted staff member from the list
        setStaffList(staffList.filter((staff) => staff._id !== id));
        // Show toast message when staff member is successfully deleted
        toast.success('Staff member deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Worker List</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border">Number</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Address</th>
            <th className="py-2 px-4 border">Join Date</th>
            <th className="py-2 px-4 border">Shift</th>
            <th className="py-2 px-4 border">License</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4 border">{staff.name}</td>
              <td className="py-2 px-4 border">{staff.id}</td>
              <td className="py-2 px-4 border">{staff.type}</td>
              <td className="py-2 px-4 border">{staff.number}</td>
              <td className="py-2 px-4 border">{staff.email}</td>
              <td className="py-2 px-4 border">{staff.address}</td>
              <td className="py-2 px-4 border">{staff.joindate}</td>
              <td className="py-2 px-4 border">{staff.shift}</td>
              <td className="py-2 px-4 border">{staff.license}</td>
              <td className="py-2 px-4 border">
                <div className="flex justify-center">
                <Link
  to={{
    pathname: '/Addworkers',
    state: { staffDetails:staff } // Pass the selected staff details
  }}
>
  <button className="bg-blue-500 text-white px-3 py-1 rounded">Update</button>
</Link>

                  <button className="bg-red-500 text-white px-3 py-1 rounded ml-2" onClick={() => handleDelete(staff._id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}