import './HomeScreen.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

// Components
import Product from '../components/Product';
import { getProduct as listProduct} from '../redux/actions/productActions';

const HomeScreen = () => {

    const dispatch = useDispatch();
    
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;
   
    const getUser = useSelector((state) => state.user);
    const users  = getUser.user.item
    console.log(users)
    let history = useHistory();

  useEffect(() => {
    if(users){
    }else if (users == ""){
      history.push('/login')
    }else{
      history.push('/login')
    }
  }, [users])


    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch])


    return <div className="homescreen">
        <h2 className="homescreen__title">Latest Product</h2>
        <div className="homescreen__products">
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (
                <Product key={product._id} 
                productId={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
                />
            ))}
        </div>
    </div>
}

export default HomeScreen


