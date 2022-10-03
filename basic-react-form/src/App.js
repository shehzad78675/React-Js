import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstName = (e) => {
    setValues({...values, firstName: e.target.value});
  }

  const handleLastName = (e) => {
    setValues({...values, lastName: e.target.value});
  }

  const handleEmail = (e) => {
    setValues({...values, email: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName !== "" && values.lastName !== "" && values.email !== ""){
      setValid(true);
    }
    setSubmit(true);
  }
  return (
    <div className="App">
      
      <form className="register-form" onSubmit={handleSubmit}>
      {submit && valid ? <div>Success, Thanks for Register</div> : null} 
        <input
          value={values.firstName}
          type="text"
          name=""
          id=""
          placeholder="First Name"
          className="input-field"
          onChange={handleFirstName}
        />
        {submit && !values.firstName ? <span>Please enter first name</span> : null}
        <input
          value={values.lastName}
          type="text"
          name=""
          id=""
          placeholder="Last Name"
          className="input-field"
          onChange={handleLastName}
        />
        {submit && !values.lastName ? <span>Please enter last name</span> : null}
        <input
          value={values.email}
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="input-field"
          onChange={handleEmail}
        />
        {submit && !values.email ? <span>Please enter email</span> : null}
        <button className="btn">Register</button>
      </form>
    </div>
  );
}

export default App;
