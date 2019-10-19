import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { ListOfProducts } from '../components/ListOfProducts'
import { Filter } from '../components/Filter'

export const ProductsContainer = () => {
  const [loading, setLoading] = useState(false)
  const [field, setField] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('https://api.myjson.com/bins/en2ik')
        setProducts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  const sortByName = (a, b) => {
    if (a[field] < b[field]) return -1
    if (a[field] > b[field]) return 1
    return 0
  }

  const sortByPrice = (a, b) => {
    const valueA = a.eyecatcher ? 'priceSale' : 'price'
    const valueB = b.eyecatcher ? 'priceSale' : 'price'
    return parseInt(a[valueA]) - parseInt(b[valueB])
  }

  const sortByEyecatcher = (a, b) => {
    if (a.eyecatcher === b.eyecatcher) return 0
    else if (a.eyecatcher === null) return 1
    else if (b.eyecatcher === null) return -1
  }

  const sorted = useMemo(() => {
    if (!field || field === '0') return products
    if (field === 'price') return products.sort(sortByPrice)
    else if (field === 'name') return products.sort(sortByName)
    else return products.sort(sortByEyecatcher)
  }, [products, field])

  return (
    <>
      <Filter sort={setField} />
      {loading ? <h2>Loading..</h2> : <ListOfProducts products={sorted} />}
    </>

  )
}
