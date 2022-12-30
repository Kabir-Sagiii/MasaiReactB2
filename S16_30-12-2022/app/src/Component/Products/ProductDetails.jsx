import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'

function ProductDetails(props) {
  const {id}= useParams()
  const [state,setState] = useState({})
  useEffect(()=>{

    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setState(data)
    })
  },[])
//   console.log(pathParameters)
    return (
        <div style={{textAlign:"center"}}>
            <h2>{Object.keys(state).length > 0 ?  state.category.toUpperCase() :""}</h2>
             <img src={Object.keys(state).length > 0 ?state.image:""} width={300} height={300} />
             <h2>{Object.keys(state).length > 0 ?state.title:""}</h2>
             <p>$ {Object.keys(state).length > 0 ?state.price:""}</p>
        </div>
    );
}

export default ProductDetails;