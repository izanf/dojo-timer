import styled from 'styled-components'

import bg from 'assets/images/bg.svg'
import bgCode from 'assets/images/bg-code.svg'
import bgTime from 'assets/images/bg-time.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgCode}), url(${bg});
  background-size: auto, cover;
  background-position: right bottom, center center;
  background-repeat: no-repeat, no-repeat;
  background-color: #557EBF;
  width: 100%;
  height: 100%;
`

export const TimeContainer = styled.div`
  background-image: url(${bgTime});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  min-width: 800px;
  min-height: 450px;
`

export const Time = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 3rem;

  span {
    color: white;
    font-size: 8rem;
    font-weight: bold;
    background: #557EBF;
    margin: 0 1rem;
    padding: 2rem;
    border-radius: 2rem;
  }
`
