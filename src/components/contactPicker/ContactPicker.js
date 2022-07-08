import React from "react";

export const ContactPicker = (props) => {
  const names = props.contacts.map((contact) => {
    return <option value={contact.name} key={contact.name} >{contact.name}</option>
  });
  
  return (
    <form>
    <label htmlFor="contactList">Choose contact:</label>
    <select id="contactList" onChange={props.onChange} required >
      <option value={props.defaultListValue} key="default" selected="selected" >{props.defaultListValue}</option>
      {names}
    </select>
  </form>
  );
};
