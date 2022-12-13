import './App.css';
import {useState} from 'react';
import {React} from 'react';
import Testing from './Testing';

function App() {
  const [password, setPassword] = useState('')
  //const [numChar, setNumChar] = useState(0)

  function handlePasswordChange(e){
    console.log(e)
    setPassword(e.target.value)
  }

  function handelPasswordLength(e){
    if (password.length <= 2 || password.length > 0){
       //console.log("weak")
       setPassword('weak')
    }
    if (password.length > 2 || password.length <= 6){
      setPassword('medium')
  }
    else{
     setPassword('strong')
    }
  }

  return (
    <div className="App">
      <h1>Password App Check</h1>
      <input value={password} onChange={handlePasswordChange}/>
      <button>Submit</button>
      <form onSubmit={handelPasswordLength}></form>
      <p>{setPassword}</p>

      <Testing/>
    </div>
  );

}

export default App;
