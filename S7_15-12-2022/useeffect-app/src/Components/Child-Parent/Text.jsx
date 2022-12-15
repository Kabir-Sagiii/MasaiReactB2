import {useState} from "react";
import Input from "./Input";

function Text() {
         const [state,setState] = useState("No Data as of Now")
  return <div style={{padding:"30px",boxShadow:"0 0 10px green",margin:"50px auto",width:"500px"}}>
    <h2>Text Component</h2>
    <p style={{color:"green",fontSize:"20px"}}>{state}</p>
    <Input  sendData={setState} />
  </div>;
}

export default Text;
