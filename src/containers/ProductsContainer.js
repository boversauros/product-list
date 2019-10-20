import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ListOfProducts } from '../components/ListOfProducts'
import { Filter } from '../components/Filter'
import { Loader } from '../styles/GlobalComponents'

export const ProductsContainer = () => {
  const [loading, setLoading] = useState(false)
  const [field, setField] = useState('')
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

  useEffect(() => {
    if (field || field !== 'none') {
      const value = field.includes('price') ? 'price' : field.includes('name') ? 'name' : 'eyecatcher'
      const ascending = !field.includes('desc')
      if (value === 'price') products.sort(sortByPrice(ascending))
      else if (value === 'name') products.sort(sortByName(ascending, value))
      else products.sort(sortByEyecatcher(ascending))
      setProducts([...products])
    }
  }, [field])

  const sortByName = (ascending = false, value) => {
    console.log(value)
    if (ascending) {
      return (a, b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0)
    } else {
      return (a, b) => (a[value] < b[value]) ? 1 : ((b[value] < a[value]) ? -1 : 0)
    }
  }

  const sortByPrice = (ascending = false) => {
    if (ascending) {
      return (a, b) => {
        const valueA = a.eyecatcher ? 'priceSale' : 'price'
        const valueB = b.eyecatcher ? 'priceSale' : 'price'
        return parseInt(a[valueA]) - parseInt(b[valueB])
      }
    } else {
      return (a, b) => {
        const valueA = a.eyecatcher ? 'priceSale' : 'price'
        const valueB = b.eyecatcher ? 'priceSale' : 'price'
        return parseInt(b[valueB]) - parseInt(a[valueA])
      }
    }
  }

  const sortByEyecatcher = (ascending = false) => {
    return (a, b) => {
      if (a.eyecatcher === b.eyecatcher) return 0
      else if (a.eyecatcher === null) return ascending ? 1 : -1
      else if (b.eyecatcher === null) return ascending ? -1 : 1
    }
  }

  return (
    <>
      <Filter sort={setField} />
      {loading ? <Loader /> : <ListOfProducts products={products} />}
    </>

  )
}
