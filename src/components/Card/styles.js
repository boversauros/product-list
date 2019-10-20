import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const CardContainer = styled.article`
  background: #ffffff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  transition: all 0.3s linear 0s;

  &:hover {
    box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`

export const Ribbon = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  margin-top: 10px;
    margin-left: 10px;
  position: absolute;

  & span {
    position: absolute;
    display: block;
    width: 100%;
    font-size: 14px;
    padding: 15px 0;
    background-color: #F79105;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
  }
`
export const MediaContainer = styled.div`
  ${fadeIn({ time: '2s' })};
`

export const Img = styled.img`
  width: 100%;
  height: auto;
`

export const ContentContainer = styled.div`
  padding: 1rem;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoContainer = styled.div`
  width: 65%;
  & h3 {
    font-size: 22px;
    margin-bottom: 0;
  }
  & p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: #B8B6B5;
    font-weight: normal;
  }
`

export const PriceContainer = styled.div`
  width: 30%;
  & p {
    color: ${props => props.isSale ? '#E62229' : '#222123'};
    font-size: 22px;
    font-weight: 600;
    margin: 0;
  }
`

export const OfferPrice = styled.span`
  font-size: 14px;
  color: #D4D4D2;
`
