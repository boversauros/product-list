import React from 'react'
import { Container, Row } from '../../styles/Layout'
import { Select } from './styles'

export const Filter = ({ sort }) => {
  return (
    <Container>
      <Row>
        <Select onChange={e => sort(e.target.value)}>
          <option value='0'>Sort by..</option>
          <option value='price'>Price</option>
          <option value='name'>Name</option>
          <option value='eyecatcher'>EyeCatcher</option>
        </Select>
      </Row>
    </Container>
  )
}
