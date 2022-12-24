import {useEffect,useState} from 'react';
import {Link,NavLink} from 'react-router-dom'

function Jewelery(props) {
    const [data,setData] = useState([])
    useEffect(()=>{
           fetch("https://fakestoreapi.com/products/category/jewelery")
           .then((res)=>res.json())
           .then((jdata)=>{console.log(jdata)
                 setData(jdata)
        
        })
    },[])
    return (
        <div style={{padding:"50px",}}>
            <h2 style={{textAlign:"center"}}>JEWELERY CATEGORY</h2>
          
                {
                    data.length > 0 ? <ul > 
                  {
                     data.map((ele,index)=>{
                        return <NavLink to={`/productdetails/${ele.id}`} style={{color:"blue"}}><li style={{marginTop:"15px"}} key={index+1}>{ele.title}</li></NavLink>
                     })
                  }

                    </ul>  :<div style={{color:"red",textAlign:"center",marginTop:"100px"}}><h3>... Loading ...</h3></div>
                }
           
        </div>
    );
}

export default Jewelery;