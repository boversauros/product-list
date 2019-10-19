import React from 'react'
import { Container, Row } from '../../styles/Layout'
import { Select } from './styles'

export const Filter = ({ sort }) => {
  return (
    <Container>
      <Row>
        <Select onChange={e => sort(e.target.value)}>
          <option value='none'>Sort by..</option>
          <option value='price'>Price</option>
          <option value='price_desc'>Price desc</option>
          <option value='name'>Name</option>
          <option value='name_desc'>Name desc</option>
          <option value='eyecatcher'>EyeCatcher</option>
          <option value='eyecatcher_desc'>EyeCatcher desc</option>
        </Select>
      </Row>
    </Container>
  )
}
