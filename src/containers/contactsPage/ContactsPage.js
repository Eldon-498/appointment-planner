import {React, useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const [alert, setAlert] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
      if(!duplicate){
        props.addContact(name, number, email);
        setName('');
        setNumber('');
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
  }, [props.contact, name, duplicate]);



  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
