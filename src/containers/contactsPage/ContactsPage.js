import {React, useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const [alert, setAlert] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
      if(!duplicate){
        props.addContact(name, phone, email);
        setName('Eldon');
        setPhone('');
        setEmail('');
      }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=>{
    for(const contactItem of props.contacts){
      if(contactItem.name === name){
        if(!duplicate){
          setDuplicate(true);
          setAlert('Can\'t have duplicate names');
          console.log('Can\'t have duplicate names');
        }
        return;
      }
      else{
        setDuplicate(false);
        setAlert('');
      }
    }
  }, [props.contacts, name, duplicate]);



  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        handleSubmit={handleSubmit}
        alert={alert}

         />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} />
      </section>
    </div>
  );
};
