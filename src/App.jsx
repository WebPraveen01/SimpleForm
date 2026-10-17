import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [FullName,setFullName] = useState("");



  const handleSubmit =(e)=>{
    e.preventDefault()
    setFullName(`${firstName} ${lastName}`)
  }
  


  return (
    <>
      <h1>Full Name Display</h1>
      <div>
        <form id="activeform" onSubmit={handleSubmit}>
          <label for="name">FirstName:</label>
          <input
            name="firstName"
            value={firstName}
            type="text"
            placeholder="Enter the firstName"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <br />

          <label for="name">LastName:</label>
          <input
            name="lastName"
            value={lastName}
            type="text"
            required
            placeholder="Enter the lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <button type="submit">submit</button>
        </form>
        {FullName && <p>Full Name: {FullName}</p>}
      </div>
    </>
  );
}

export default App
