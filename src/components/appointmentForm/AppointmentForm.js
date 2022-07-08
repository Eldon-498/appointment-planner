import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  defaultListValue
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titleInput">Title</label>
      <input
      value={title}
      id="titleInput"
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      required 
      />
      <ContactPicker
      contacts={contacts}
      onChange={(e)=>setContact(e.target.value)}
      defaultListValue={defaultListValue} />      
      <label htmlFor="dateInput">Date</label>
      <input
      type="date"
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      id="dateInput"
      min={getTodayString()} 
      required
      />
      <label htmlFor="timeInput">Time</label>
      <input 
      value={time}
      type="time"
      onChange={(e)=>setTime(e.target.value)}
      id="timeInput"
      required
      />
      <input type="submit" value="Add Appointment"  />
      <h2 className="alert">{alert}</h2>
    </form>
  );
};
