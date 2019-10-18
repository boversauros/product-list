import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import {
  CardContainer,
  Img,
  Ribbon,
  ContentContainer,
  InfoContainer,
  PriceContainer,
  MediaContainer,
  OfferPrice
} from './styles'

export const Card = ({ product = {} }) => {
  const [show, ref] = useNearScreen()

  return (
    <CardContainer ref={ref}>
      {show &&
        <MediaContainer>
          {product.eyecatcher &&
            <Ribbon>
              <span>{product.eyecatcher}</span>
            </Ribbon>}
          <Img src={product.image} alt={product.name} />
        </MediaContainer>}
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
