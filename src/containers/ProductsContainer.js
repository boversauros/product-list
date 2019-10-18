import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ListOfProducts } from '../components/ListOfProducts'

export const ProductsContainer = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('https://api.myjson.com/bins/en2ik')
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  return (
    <>
      {loading ? <h2>Loading..</h2> : <ListOfProducts products={products} />}
    </>

  )
}
