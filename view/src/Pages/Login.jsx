import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginImage from './../Image/LoginImage.png'
export const Login = () => {
    const navigate = useNavigate()
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [Role, setRole] = useState('')
    async function handleSubmit(event){
        event.preventDefault()
        const response = await fetch('/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({'name':Name, 'password':Password, 'role':Role})
        })
        const data = await response.json()
        if(data.status){
            localStorage.setItem('isLoggedIn',true)
            if (Role === 'doctor' || Role === "patient"){
                navigate('/dashboard',{replace:true})
            }
            else{
                navigate('/patients',{
                    replace:true
                })
            }
        }
        else{
            alert(data.message)
            console.log(Name,Password,Role)
        }
    }
  return (
    <div className=' items-center'>
    <div className='fixed w-full'>
        <img className='w-[100%] h-[90%] ' src={LoginImage} alt='img'/>
    </div>
        
        <div className='p-3 h-screen relative flex justify-center items-center'>
        <div className='bg-green-50 rounded-lg p-12 shadow-md '>
        <div className='bg-white rounded-lg p-12 shadow-md'>
            <form className='' onSubmit={handleSubmit}>
                                
                {/* <p className='text-2xl text-center'>View your Doctors...</p>
                <p className='text-2xl text-center pb-10'>By Login</p> */}
                <div className='flex gap-3 pt-2'>
                    <label className='text-2xl ' htmlFor="username">UserName</label>
                    <input className='border-[2px] border-green-800 p-2' type="text" name='username' onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div className='flex gap-6 pt-2'>
                    <label className='text-2xl' htmlFor="password">Password</label>
                    <input className='border-[2px] border-green-800 p-2' type="password" name='passowrd' onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <div className='flex gap-3 justify-center pt-4'>
                    <label className='text-2xl' htmlFor="role">Role</label>
                    <select className='border-[2px] border-green-800 p-2' name="Role" defaultValue='' onChange={(e)=>setRole(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="admin">Admin</option>
                    </select>
                    {/* <div><input type="radio" name='usertype' placeholder='User' onChange={(e)=>setRole(e.target.value)} required/> User</div>
                    <div><input type="radio" name='usertype' placeholder='Doctor' onChange={(e)=>setRole(e.target.value)} required/> Doctor</div>
                    <div><input type="radio" name='usertype' placeholder='Patient' onChange={(e)=>setRole(e.target.value)} required/> Patient</div> */}
                </div>
                <div className='flex justify-center pt-9'>
                    <input className='border-[3px] border-green-600 text-white bg-green-500 p-2 text-xl rounded-lg hover:animate-pulse mr-4' type="submit" value="Login  " />
                    {/* <input className='border-[3px] border-green-600 text-white bg-green-500 p-2 text-xl rounded-lg hover:animate-pulse ' type="submit" value="New?Register" /> */}
                
                </div>


                <div className='flex pt-4 items-center justify-center'>
                <label className='text-3x1' htmlFor="username">Are you New..?</label>
                <a href="/register" className='ml-2 text-blue-500 hover:underline text-2x1'>Register</a>
</div>
            </form>
           
            </div>
            
        </div>
        
        </div>
    </div>
  )
}

