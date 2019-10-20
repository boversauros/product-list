import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1335px;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`

export const Column = styled.div`
  height: 100%;
  flex-basis: 25%;
  -ms-flex: auto;
  width: 259px;
  position: relative;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 1333px) {
    flex-basis: 33.33%;
  }
  @media (max-width: 1073px) {
    flex-basis: 33.33%;
  }
  @media (max-width: 815px) {
    flex-basis: 50%;
  }
  @media (max-width: 555px) {
    flex-basis: 100%;
  }
`

export const Title = styled.h1`
    text-align: center;
    padding: 1rem;
`

export const Loader = styled.div`
  display: inline-block;
  width: 100%;
  &::after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 0 auto;
    border-radius: 50%;
    border: 5px solid #ec008c;
    border-color: #ec008c transparent #ec008c transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
