import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginImage from './../Image/LoginImage.png';

export const Booking = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Role, setRole] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    // Handle the appointment booking logic here

    // For demonstration purposes, simply log the booking details
    console.log('Booking details:', { Name, Date, Time, Role });

    // Redirect or navigate to another page after booking
    navigate('/confirmation', { replace: true });
  }

  return (
    <div className='items-center'>
      <div className='fixed w-full'>
        <img className='w-[100%] h-[90%] ' src={LoginImage} alt='img' />
      </div>

      <div className='p-3 h-screen relative flex justify-center items-center'>
        <div className='bg-green-50 rounded-lg p-12 shadow-md '>
          <div className='bg-white rounded-lg p-12 shadow-md'>
            <form className='' onSubmit={handleSubmit}>
              <div className='flex gap-3 pt-2'>
                <label className='text-2xl' htmlFor="patientName">Patient Name</label>
                <input className='border-[2px] border-green-800 p-2' type="text" name='patientName' onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className='flex gap-3 pt-2'>
                <label className='text-2xl' htmlFor="appointmentDate">Appointment Date</label>
                <input className='border-[2px] border-green-800 p-2' type="date" name='appointmentDate' onChange={(e) => setDate(e.target.value)} required />
              </div>
              <div className='flex gap-3 pt-2'>
                <label className='text-2xl' htmlFor="appointmentTime">Appointment Time</label>
                <input className='border-[2px] border-green-800 p-2' type="time" name='appointmentTime' onChange={(e) => setTime(e.target.value)} required />
              </div>
              <div className='flex gap-3 pt-2'>
                <label className='text-2xl' htmlFor="role">Doctor</label>
                <select className='border-[2px] border-green-800 p-2' name="Role" defaultValue='' onChange={(e) => setRole(e.target.value)} required>
                  <option value="">Select Doctor</option>
                  <option value="doctor1">John Deo</option>
                  <option value="doctor2">marry</option>
                  <option value="doctor3">Thrisha</option>
                  <option value="doctor4">priya</option>
                  {/* Add more doctors as needed */}
                </select>
              </div>

              <div className='flex justify-center pt-9'>
                <input className='border-[3px] border-green-600 text-white bg-green-500 p-2 text-xl rounded-lg hover:animate-pulse mr-4' type="submit" value="Book Appointment" />
              </div>

              <div className='flex pt-4 items-center justify-center'>
                <label className='text-3xl' htmlFor="newPatient">New Patient?</label>
                <a href="/register" className='ml-2 text-blue-500 hover:underline text-2xl'>Confirm Appoinment</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};