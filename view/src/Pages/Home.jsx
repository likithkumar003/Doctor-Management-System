import React from 'react'
import HomeImage from './../Image/FrontImage.png'
import Typewriter from 'typewriter-effect';
function Home() {
  return (
    <div className='w-[100%]'>
        <div className='flex justify-between px-[10%] gap-10  pt-10 items-center '>
          <div className='flex justify-center text-xl pt-10'>
              <div>
                    <p className="text-4xl font-semibold uppercase">
                      <Typewriter
                        options={{
                          strings: ['Book your Appointment.', 'Know your Doctor.','Check Your status.'],
                          autoStart: true,
                          loop: true,
                          delay:2
                        }}
                        />
                      </p>
                      <p>This is the platform to book your Appointments online.</p>
                      <p>Get knowing about the doctor.</p>
                      <p>To verify your health</p>
              </div>
          </div>
          <div className=''>
              <img src={HomeImage} className='w-[100%] h-full' alt='Home'/>
          </div>
        </div>
    </div>
  )
}

export default Home