import './App.css';
import {useState} from 'react';
import {React} from 'react';
import Testing from './Testing';
//import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  const [password, setPassword] = useState('')
  
  const passLength = () =>{
    if (password.length <= 2 && 0 <= password.length){
      return 0
    }
    else{
      return password.length
    } 
  }

  function handlePasswordChange(e){
    console.log(e)
    setPassword(e.target.value)
  }

  return (
    <div className="App">
      <h1>Password App Check</h1>
      
      <input type="password" value={password}
      placeholder="start typing pass"
      onChange={handlePasswordChange}
      />
      
      <button type="button" disabled={!passLength(password.length)}>Submit</button>
      <p>{setPassword}</p>

      <Testing password = {password}
      />
    </div>
  );

}

export default App;
