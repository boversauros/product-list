import styled from 'styled-components'

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
