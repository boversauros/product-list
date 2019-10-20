import React from 'react'
import { Container, Row, Column } from '../../styles/GlobalComponents'
import { Card } from '../Card'

export const ListOfProducts = ({ products = [] }) => {
  return (
    <Container>
      <Row>
        {
          products.map(product => (
            <Column key={product.id}>
              <Card product={product} />
            </Column>
          ))
        }
      </Row>
    </Container>
  )
}
