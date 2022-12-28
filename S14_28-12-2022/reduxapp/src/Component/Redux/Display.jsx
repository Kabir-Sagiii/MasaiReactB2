import React from 'react';
import {useSelector} from 'react-redux'

function Display(props) {
            const data = useSelector((storedata)=>{
                         return storedata
                       })
    return (
        <div style={{padding:"30px 100px"}}>
            <h3>Display Component</h3>
            <h4 style={{color:"red"}}>{data}</h4>
        </div>
    );
}

export default Display;