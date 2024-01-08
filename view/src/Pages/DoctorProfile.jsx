import React from 'react';
import { Link , useParams } from 'react-router-dom';
import LoginImage from './../Image/LoginImage.png'
import MaleDoc1 from './../Image/MaleDoctor1.jpg'


export const DoctorProfile = () => {
  const { name } = useParams();

  // Assuming you have the necessary data for a doctor
  const doctorDetails = {
    name: 'Dr. John Doe',
    age: 46,
    experience: '1 years',
    availableTime: '9:00 AM - 5:00 PM',
    profilePicture: 'C:\Users\Asus\Desktop\DoctorManagementSystem-main(1)\DoctorManagementSystem\DoctorManagementSustem\view\src\Image\MaleDoctor1.jpg', // Add the path or URL to the profile picture
    appointments: [
      { time: '10:00 AM', patient: 'Patient 1' },
      { time: '2:30 PM', patient: 'Patient 2' },
      // Add more appointments as needed
    ],
  };

  return (
    
    
    <div className=' items-center'>
        <div className='fixed w-full'>
            <img className='w-[100%] h-[100%] ' src={LoginImage} alt='img'/>
        </div>
        <div className='p-3 h-screen relative flex justify-center items-center'>
        <div className='bg-green-50 rounded-lg p-12 shadow-md '>
        <div className='bg-white rounded-lg p-12 shadow-md '>
      <div className='flex items-center justify-center'>
        {/* <img
          src={doctorDetails.profilePicture}
          alt={Profile of {doctorDetails.name}}
          className='rounded-full h-20 w-20 object-cover'
        /> */}
        <img className=' w-96 h-96' src={MaleDoc1} alt="" />
        <p className='text-2xl text-center pt-2  border-4 bg-green-300'>Doctor Profile: <span className='text-green-700 capitalize'>{doctorDetails.name}</span></p>
      </div>

      
      <div className='pt-4'>
        <table className='table-auto mx-auto'>
          <tbody>
            <tr>
              <td className='border px-4 py-2 font-bold'>Name:</td>
              <td className='border px-4 py-2'>{name}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold'>Age:</td>
              <td className='border px-4 py-2'>{doctorDetails.age}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold'>Experience:</td>
              <td className='border px-4 py-2'>{doctorDetails.experience}</td>
            </tr>
            {/* Add more details as needed */}
          </tbody>
        </table>

      </div>

      <p className='text-xl text-center gap-7 font-bold pt-4 '>Appointments Schedule:</p>

      <div className='pt-4'>
        

        <table className='table-auto mx-auto'>
          <thead>
            <tr>
              <th className='border px-4 py-2'>Time</th>
              <th className='border px-4 py-2'>Patient</th>
              <th className='border px-4 py-2'>Actions</th> {/* Add Actions column for links */}
            </tr>
          </thead>
          <tbody>
            {doctorDetails.appointments.map((appointment, index) => (
              <tr key={index}>
                <td className='border px-4 py-2'>{appointment.time}</td>
                <td className='border px-4 py-2'>{appointment.patient}</td>
                <td className='border px-4 py-2'>
                  {/* Link to the appointment page for each appointment */}
                  <Link to={'/AppoinmentPage'}>
                    View Appointment
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='text-center pt-4'>
        <Link to="/doctors" className='text-blue-500 hover:underline'>
          Back to Doctors List
        </Link>
      </div>

      </div>
      </div>
      </div>
      </div>
    </div>
  );
};