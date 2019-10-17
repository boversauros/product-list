import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Card } from './components/Card'
import { Container, Row, Column, Title } from './styles/Layout'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Title>Product List</Title>
      <Container>
        <Row>
          <Column>
            <Card />
          </Column>
        </Row>
      </Container>
    </div>
  )
}
