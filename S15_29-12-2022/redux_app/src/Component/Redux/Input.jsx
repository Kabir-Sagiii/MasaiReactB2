import {useState} from 'react';
import { nameAction } from './action';
import {useDispatch} from 'react-redux'

function Input(props) {
    const [state,setState] = useState("")
           const dispatch   = useDispatch()

    const sendDataToAction = ()=>{
             nameAction(state,dispatch)
    }
    return (
        <div style={{padding:"50px 100px"}}>
            <h3>Input Component</h3>
              <input type="text" placeholder='Enter Some Name' onChange={(e)=>{setState(e.target.value)}} />
              <button onClick={sendDataToAction}>Submit</button>
        </div>
    );
}

export default Input;