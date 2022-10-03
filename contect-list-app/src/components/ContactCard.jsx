import { useState } from "react";

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false)
    const {image, name, email, age} = props;
  return (
    <div className="contact-card">
      <img src={image} alt="" />
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Enail: {email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show age</button>
        {showAge && <p>Age: {age}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
