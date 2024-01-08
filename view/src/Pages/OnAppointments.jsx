import React from 'react'
import LoginImage from './../Image/LoginImage.png'
import { Link } from 'react-router-dom'

export const OnAppointments = () => {
  return (
    // <div className=' items-center'>
    // <div className='fixed w-full'>
    //     <img className='w-[100%] h-[90%] ' src={LoginImage} alt='img'/>
    // </div>
    
    <div className=' items-center'>
    <div className='fixed w-full'>
        <img className='w-[100%] h-[90%] ' src={LoginImage} alt='img'/>
    </div>
        
        <div className='p-3 h-screen relative flex justify-center items-center'>
        <div className='bg-green-50 rounded-lg p-12 shadow-md '>
        <div className='bg-white rounded-lg p-12 shadow-md'>
            <form className='' >
              <div className='flex pt-4 items-center justify-center'>
                <div className='flex justify-center'>
              <div>
              <div><p className='text-4xl animate-pulse'>OnAppointments</p></div>
              <div className='pt-10'>
                <p className='pt-10 text-2x1'>Click Doctors page To book appointments</p>
                <p><Link to='/doctors' className='text-blue-600'>Click here </Link></p>
                <p className='pt-10 text-center'>or</p>
                <p className='pt-10 text-2x1'>Login to see Your Appointments</p>
                <p><Link to='/login' className='text-blue-600'>Click here</Link></p>
              </div>
              </div>
              </div>
              </div>
            </form>
           
        </div>
        </div>
        </div>
    </div>
    
  )
}
