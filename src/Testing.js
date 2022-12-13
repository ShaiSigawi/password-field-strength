import './App.css';
import {useState, useEffect} from 'react';
import {React} from 'react';

function Testing(props){
    const {password} = props
    const [char, setchar] = useState("")

    useEffect(() => {
        if (password.length <= 2 && 0 < password.length){
            //console.log("weak")
            setchar('weak')
         }

        else if (password.length > 2 && password.length <= 6){
            setchar('medium')
        }
        
        else if (password.length >6 ){
            setchar('strong')
        }

        else{
            setchar(<h3>You haven't entered a password yet</h3>)
        }
       
    },[password,setchar])


  return (
    <div className="Testing">
      <p>{char}</p>
    </div>
  );
}

export default Testing;
