import {useState} from "react";


function Input(props) {
  const [data,setData] = useState("")
  
  const sendDataToParent= ()=>{
      props.sendData(data)
  }
  
  return <div 
  style={{textAlign:"center",margin:"50px auto", padding:"50px",boxShadow:"0 0 10px black",}}>
    <h2>Input Component</h2>
    <input type="text" placeholder="Enter Some Text" onChange={(e)=>{setData(e.target.value)}} />
    <button onClick={sendDataToParent} >Submit</button>
    
  </div>;
}

export default Input;
