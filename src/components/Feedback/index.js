import React from 'react'
import { Container, Row } from '../../styles/GlobalComponents'
import { FeedbackContainer } from './styles'

export const Feedback = ({ message = 'something go wrong' }) => {
  return (
    <Container>
      <Row>
        <FeedbackContainer>{message}</FeedbackContainer>
      </Row>
    </Container>
  )
}
