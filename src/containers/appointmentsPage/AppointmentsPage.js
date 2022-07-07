import {React, useState, useEffect}from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
export const AppointmentsPage = (props) => {

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [alert, setAlert] = useState('');
  const defaultListValue = 'No contact selected';

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
    document.getElementById('contactList').value = defaultListValue;
   
  };

  useEffect(()=>{
    for(const appointmentItem of props.appointments) {
      if(appointmentItem.date === date && appointmentItem.time === time){
        setAlert('An appointment has already been reserved for that time and date');
        console.log('Appointment already reserved');
      } else {
        setAlert('');
      }
    }
  }, [props.appointments, time, date])

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={props.contacts}
        title={title}
        setTitle={setTitle}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        contact={contact}
        setContact={setContact}
        handleSubmit={handleSubmit}
        alert={alert}
        defaultListValue={defaultListValue}


        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList object={props.appointments}/>
      </section>
    </div>
  );
};
