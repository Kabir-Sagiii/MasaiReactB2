import {useState} from "react";
import Text from "./Text";

function Input(props) {
  const [inputdata,setInputData] = useState("No Data")
  const [state,setState] = useState("No Data")

  const sendDataToChild = ()=>{
        setState(inputdata)
  }
  return <div 
  style={{textAlign:"center",margin:"50px auto", padding:"50px",boxShadow:"0 0 10px black",width:"300px"}}>
    <h2>Input Component</h2>
    <input type="text" placeholder="Enter Some Text"
     onChange={(event)=>{ setInputData(event.target.value)}} />
    <button onClick={sendDataToChild}>Submit</button>
    <Text data={state} />
  </div>;
}

export default Input;
