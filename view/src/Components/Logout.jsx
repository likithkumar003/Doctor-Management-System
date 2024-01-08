import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
    const navigate = useNavigate()
    console.log(localStorage.getItem('isLoggedIn'))
    function btn_logout(){
        localStorage.removeItem('isLoggedIn')
        navigate('/',{replace:true})
    }
  return (
    <div>
        {!localStorage.getItem('isLoggedIn') ?
        <button onClick={()=>btn_logout()} className='fixed bottom-10 right-0'>Logout</button>
        :
        <button className='fixed bottom-10 right-0'> </button>    
    }
    </div>
  )
}
