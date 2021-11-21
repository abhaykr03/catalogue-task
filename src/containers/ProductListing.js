import React, {useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/productActions'

const ProductListing = () => {
const allProducts_api = "https://fakestoreapi.com/products";

      useEffect(() => {
        fetchProducts();
      },[]);
      const products = useSelector(state => state)
            console.log("products", products)
      const dispatch = useDispatch();

      const fetchProducts = async () => {
          const response = await axios.get(allProducts_api).catch( (err) => {
              console.log('Errors', err)
          }); 
          dispatch( setProducts(response.data));
      } 
    return (
        <div className="ui grid container">
           <ProductComponent/>
        </div>
    )
}


export default ProductListing;