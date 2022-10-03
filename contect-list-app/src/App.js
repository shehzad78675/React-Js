import { useEffect, useState } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
      getContacts();
  }, []);

  const getContacts = async () => {
    const response = await fetch('https://randomuser.me/api/?results=500');
    const data = await response.json();
    // console.log(data.results);
    setContacts(data.results);

  }
  return (
    <div>
      {contacts.map((contact, index) => {
        return (
          <ContactCard
          key={index}
            image={contact.picture.large}
            name={`${contact.name.first} ${contact.name.last}`}
            email={contact.email}
            age={contact.dob.age}
          />
        );
      })}
    </div>
  );
}

export default App;
