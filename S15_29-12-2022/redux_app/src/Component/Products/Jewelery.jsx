import {useEffect,useState} from 'react';
import {Link,NavLink} from 'react-router-dom'
import jeweleryAction from './Redux_Pipeline/jeweleryAction';
import {useDispatch,useSelector} from 'react-redux'

function Jewelery(props) {
    const [data,setData] = useState([])
    const jewelerydata = useSelector((storedata)=>{
             return storedata.products.jewelery
    })
    const dispatch = useDispatch()
    useEffect(()=>{
           if(jewelerydata.length===0){
            fetch("https://fakestoreapi.com/products/category/jewelery")
           .then((res)=>res.json())
           .then((jdata)=>{console.log(jdata)
            jeweleryAction(jdata,dispatch)
                 setData(jdata)
        
        })
           } else {
            setData(jewelerydata)
           }
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