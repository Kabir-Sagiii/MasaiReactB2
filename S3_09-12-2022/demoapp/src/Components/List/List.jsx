import {useState} from 'react';

function List(props) {

     let [techitems,setTechItem]=  useState(["React","Angular","Spring","DSA","JS"]) 
      let [name,setName]=  useState("Kabir")
       let [city,setCity]=  useState("Delhi")

    return (
        <div style={{textAlign:"center"}}>
              <h3>List of Technologies</h3>
               <h5>{name} is from {city}</h5>
                 <ol>
                     
                     {
                         techitems.map((ele)=>{
                           

                             
                              return <li>{ele}</li>
                             
                         })
                     }
                 </ol>

        </div>
    );
}

export default List;