import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { ProductsContainer } from './containers/ProductsContainer'
import { Title } from './styles/Layout'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Title>Product List</Title>
      <ProductsContainer />
    </div>
  )
}
