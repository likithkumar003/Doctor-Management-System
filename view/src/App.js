import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register"
import { Dashboard } from "./Pages/Dashboard"
import { Doctorrs } from "./Pages/Doctorrs"
import { AppointmentPage } from "./Pages/AppointmentPage"
import { OnAppointments } from "./Pages/OnAppointments"
import { Navbar } from "./Components/Navbar"
import { PatientDetails } from "./Pages/PatientDetails"
import { Logout } from "./Components/Logout"
import { Feedback } from "./Pages/Feedback"
import { PageNotFound } from "./Pages/PageNotFound"
import { Booking } from "./Pages/booking"
import { DoctorProfile } from "./Pages/DoctorProfile"


export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Logout/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/Register" Component={Register} />
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/doctors" Component={Doctorrs}/>
        <Route path="/appointment" Component={OnAppointments}/>
        <Route path="/book/:name" Component={AppointmentPage}/>
        <Route path="/patients" Component={PatientDetails}/>
        <Route path="/feedback" Component={Feedback}/>
        <Route path="/booking" Component={Booking}/>
        <Route path="*" Component={PageNotFound}/>
        <Route path="/DoctorProfile" Component={DoctorProfile}/>
      </Routes>
    </BrowserRouter>
  )
}