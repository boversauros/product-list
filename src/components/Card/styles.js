import styled from 'styled-components'

export const CardContainer = styled.article`
  background: #ffffff;
  height: 410px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  transition: all 0.3s linear 0s;

  &:hover {
    box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`

export const Ribbon = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;

  & span {
    position: absolute;
    display: block;
    width: 100%;
    padding: 15px 0;
    background-color: #ec008c;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font: 700 18px/1 "Lato", sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
  }
`

export const Img = styled.img`
  width: 100%;
  height: auto;
`

export const ContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoContainer = styled.div`
  width: 75%;
  & h3 {
    font-size: 22px;
    margin-bottom: 0;
  }
  & h4 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 18px;
    color: lightgray;
    font-weight: normal;
  }
`

export const PriceContainer = styled.div`
  width: 25%;
  & p {
    color: #ec008c;
    font-size: 22px;
    font-weight: 600;
    margin: 0;
  }
`

export const OfferPrice = styled.span`
  color: lightgray;
`
