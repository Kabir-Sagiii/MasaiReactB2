import React from "react";

function Text({data}) {
  return <div style={{padding:"30px",boxShadow:"0 0 10px green",margin:"20px"}}>
    <h2>Text Component</h2>
    <p style={{color:"green",fontSize:"20px"}}>{data}</p>
  </div>;
}

export default Text;
