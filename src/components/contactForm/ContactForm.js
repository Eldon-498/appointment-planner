import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input 
      value={name}
      onChange={(e)=>setName(e.target.value)} type="text" id="nameInput" required />
      <label htmlFor="phoneInput">Phone</label>
      <input 
      value={phone} 
      onChange={(e)=>setPhone(e.target.value)} 
      type="tel" id="phoneInput"
      pattern="^0(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$" required />
      <label htmlFor="emailInput">Email</label>
      <input 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      type="email"
      required
      id="emailInput"
       />
       <input type="submit" value="Add Contact" />
       <h2 className="alert">{alert}</h2>
    </form>
  );
};
