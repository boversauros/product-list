import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Container, Row, Column, Title } from './styles/Layout'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Title>Product List</Title>
      <Container>
        <Row>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </Row>
      </Container>
    </div>
  )
}
