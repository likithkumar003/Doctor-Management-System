import React, { useEffect } from 'react'
import { useState } from 'react'
import LoginImage from './../Image/LoginImage.png'
import { json } from 'react-router-dom'

export const PatientDetails = () => {
    const [Patients, setPatients] = useState()
    const [IsFetching, setIsFetching] = useState(true)
    console.log(Patients)
    const [PatientUpdate, setPatientUpdate] = useState({
        id:"10",
        name:"",
        Doc:"",
        type:""
    })
    function updatePatientDetails(event){
        setPatientUpdate({
            ...PatientUpdate,
            [event.target.name] : event.target.value
        })
    }
    async function addPatient(event){
        event.preventDefault()
        const response = await fetch('/patients',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(PatientUpdate)
        })
        const data = await response.json()
        if (data.status){
            alert(data.message)
        }
        setPatients((prePatients) => [...prePatients, PatientUpdate])
        setPatientUpdate({
            id:[PatientUpdate.id]+1,
        name:"",
        Doc:"",
        type:""})
    }

    async function getPatients(){
        try{
            const response = await fetch('/patients')
            const data = await response.json()
            if (data.status){
                console.log("first")
                setPatients(data.patients)
                setIsFetching(false)
            }
        } catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getPatients()
    },[])

  return (

        <div>
        

        <div>
            <p className='text-center text-3xl text-green-600 pt-10'>Patients</p>
            
        </div>     
        <div className='flex justify-center py-14 '>
            
        <div className='bg-green-100 rounded-lg p-12 shadow-md'>
        <div className='bg-white rounded-t-lg p-12 shadow-md'>
            <form action="" onSubmit={addPatient}>
                Patient Name <br />
                <input className='border-[1px] border-green-800 p-1' value={PatientUpdate.name} onChange={updatePatientDetails} name='name' type="text" required autoFocus/> <br /> <br />
                Doctor Name <br />
                <input className='border-[1px] border-green-800 p-1' value={PatientUpdate.Doc} onChange={updatePatientDetails} name='Doc' type="text" required/> <br /> <br />
                type <br />
                <input className='border-[1px] border-green-800 p-1' value={PatientUpdate.type} onChange={updatePatientDetails} name='type' type="text" required/> <br /> <br />
                <input className='border-2 p-2 rounded hover:cursor-pointer bg-green-500 hover:bg-green-900 hover:text-white' type="submit" value="Add patient" />
            </form>
        </div>
        </div>
        </div>
        <div>
        
       
            <table>
            <div className='bg-green-100 rounded-lg p-12 shadow-md'>
            <div className='bg-white rounded-lg p-12 shadow-md'>
                <thead>
                    <tr>
                            <td>S.No</td>
                            <td>Patient Name</td>
                            <td>Doctor Name</td>
                            <td>Overview</td>
                    </tr>
                </thead>
                <tbody>
                    {IsFetching ? 
                    <>Loading</>:
                    <>{Patients.map((patient, index)=>(
                        <tr key={index}>
                            <td>{patient.patient_id}</td>
                            <td>{patient.patient_name}</td>
                            <td>{patient.doctor_id}</td>
                            <td>{patient.description}</td>
                        </tr>
                    ))}</>
                    }
                </tbody>
                </div>
                </div>
            </table>
            </div>
    </div>
  )
}
