import React from 'react'
import {
  CardContainer,
  Img,
  Ribbon,
  ContentContainer,
  InfoContainer,
  PriceContainer,
  OfferPrice
} from './styles'

export const Card = () => {
  const url =
    'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'

  return (
    <CardContainer>
      <Ribbon>
        <span>Sale</span>
      </Ribbon>
      <Img src={url} alt='test' />
      <ContentContainer>
        <InfoContainer>
          <h3>Product Name</h3>
          <h4>Brand Name</h4>
        </InfoContainer>
        <PriceContainer>
          <OfferPrice>
            <strike>750 €</strike>
          </OfferPrice>
          <p>600 €</p>
        </PriceContainer>
      </ContentContainer>
    </CardContainer>
  )
}
