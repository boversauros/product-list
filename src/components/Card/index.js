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
              <span>Erbjudande</span>
            </Ribbon>}
          <Img src={product.image} alt={product.name} />
        </MediaContainer>}
      <ContentContainer>
        <InfoContainer>
          <p>{product.brand}</p>
          <h3>{product.name}</h3>
        </InfoContainer>
        <PriceContainer isSale={!!product.eyecatcher}>
          <p>{product.eyecatcher ? product.priceSale : product.price} :-</p>
          {product.eyecatcher &&
            <OfferPrice>
              <strike>istället för {product.price} :-</strike>
            </OfferPrice>}
        </PriceContainer>
      </ContentContainer>
    </CardContainer>
  )
}
