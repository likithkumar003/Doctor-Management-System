import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const AppointmentPage = () => {
  const { name } = useParams();

  return (
    <div>
      <div>
        <p className='text-2xl text-center pt-10 underline'>
          Appointment with{'  ' }
          <Link to={`/booking`} className='text-green-700 capitalize'>
            {name}
          </Link>
        </p>
      </div>
      <div className='text-center pt-4'>
          <Link to={'/DoctorProfile'} className='text-blue-500 hover:underline'>
            View {name}'s Profile
          </Link>

        
      <form action=''>
        {/* Your form contents go here */}
      </form>
    </div>
    </div>
  );
};
