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

export const Card = ({ product = {} }) => {
  return (
    <CardContainer>
      {product.eyecatcher &&
        <Ribbon>
          <span>{product.eyecatcher}</span>
        </Ribbon>}
      <Img src={product.image} alt='test' />
      <ContentContainer>
        <InfoContainer>
          <h3>{product.name}</h3>
          <h4>{product.brand}</h4>
        </InfoContainer>
        <PriceContainer>
          {product.eyecatcher &&
            <OfferPrice>
              <strike> {product.price}€</strike>
            </OfferPrice>}
          <p>{product.eyecatcher ? product.priceSale : product.price} €</p>
        </PriceContainer>
      </ContentContainer>
    </CardContainer>
  )
}
