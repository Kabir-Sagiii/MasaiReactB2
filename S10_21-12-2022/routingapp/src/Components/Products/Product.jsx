import React from 'react';
import {Link,Outlet} from 'react-router-dom'
import "./Product.css"

function Product(props) {
    return (
        <div className='productContainer'> 
                <div>
                <Link to="electronic" >Electronics</Link>
                 <Link to="jewelery" >Jewelery</Link>
                <Link to="#" >MensClothing</Link>
                 <Link to="#" >WomenClothing</Link>
                </div>

                <div>
                  <Outlet />
                </div>
        </div>
    );
}

export default Product;