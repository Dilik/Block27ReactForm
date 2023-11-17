import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate';
import SignUpForm from './components/SignUpForm';


function App() {

const [token, setToken] = useState(null);
// console.log("Received token is: ", token);


  return (
    <>
    <SignUpForm token={token} setToken={setToken}/>
    <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App
