import React, { useState, useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { ListOfProducts } from '../components/ListOfProducts'
import { Filter } from '../components/Filter'
import { Loader } from '../styles/GlobalComponents'

export const ProductsContainer = () => {
  // const [loading, setLoading] = useState(false)
  const [field, setField] = useState('')
  const [error, data, loading, setData] = useFetchData('https://api.myjson.com/bins/en2ik')

  useEffect(() => {
    if (field || field !== 'none') {
      const value = field.includes('price') ? 'price' : field.includes('name') ? 'name' : 'eyecatcher'
      const ascending = !field.includes('desc')
      if (value === 'price') data.sort(sortByPrice(ascending))
      else if (value === 'name') data.sort(sortByName(ascending, value))
      else data.sort(sortByEyecatcher(ascending))
      setData([...data])
    }
  }, [field])

  const sortByName = (ascending = false, value) => {
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
      {
        loading
          ? <Loader />
          : error
            ? <h1>error</h1>
            : <ListOfProducts products={data} />
      }
    </>

  )
}
