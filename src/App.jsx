import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [data, setData] = useState([])
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  const date = new Date("2015-03-25").toDateString()

  const firstchar = firstName.charAt(0);
  const firstupper = firstchar.toUpperCase();
  const lastchar = lastName.charAt(0);
  const lastupper = lastchar.toUpperCase();

  const handleSave = ()=>{
    const dt = [...data];
    const newObject = {
      firstName:firstName,
      lastName:lastName,
      newdate: date
    }
    dt.push(newObject);
    setData(dt);
  }
  console.log("firstname",firstName ,lastName);
  console.log("Last Namr",date);

  console.log("ksfkdfsjf",data);

  return (
    <>
      <div className='wrapper'>
        <div className='left'>
            <div className='first'>
              <h2>{firstupper}</h2>
            </div>
            <div className='second'>
              <h2>{lastupper}</h2>
            </div>
        </div>
        <div className='right'>
            <div className='form '>
              <input type='text' placeholder='First name' value={firstName}  onChange={(e)=>setFirstName(e.target.value)}/><br/>
              <input type="text" placeholder='Last name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/><br/>
              <button className='btn btn-md btn-success w-100' onClick={()=>handleSave()}>Submit</button>
            </div> 
            <div className='uselist'>
              <h2>User List</h2>
              <hr/>
              {
                data && data.map((newdata,index)=>{
                  return(
                    <div key={index}>
                      <h4>{newdata.firstName} {newdata.lastName}</h4>
                      <p>{newdata.newdate}</p>
                      <hr/>
                    </div>
                    
                  )
                })
              }
            </div>
        </div>
      </div>
    </>
  )
}

export default App
