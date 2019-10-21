import React from 'react'
import { Container, Row } from '../../styles/GlobalComponents'
import { Select } from './styles'

export const Filter = ({ sort }) => {
  return (
    <Container>
      <Row>
        <Select onChange={e => sort(e.target.value)} name='filter'>
          <option value='none'>Sortera efter..</option>
          <option value='price'>Pris uppstigande</option>
          <option value='price_desc'>Pris avstigande</option>
          <option value='name'>A - Z</option>
          <option value='name_desc'>Z - A</option>
          <option value='eyecatcher'>Erbjudande uppstigande</option>
          <option value='eyecatcher_desc'>Erbjudande avstigande</option>
        </Select>
      </Row>
    </Container>
  )
}
