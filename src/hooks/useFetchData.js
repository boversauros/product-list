import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(url)
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  return [error, data, loading, setData]
}
