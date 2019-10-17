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
