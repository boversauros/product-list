import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { ProductsContainer } from './containers/ProductsContainer'
import { Title } from './styles/GlobalComponents'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Title>Produktlista</Title>
      <ProductsContainer />
    </div>
  )
}
