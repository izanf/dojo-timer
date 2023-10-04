import styled from 'styled-components'
import { FaRetweet, FaPlay, FaPause } from 'react-icons/fa'

import { useTimer } from 'hooks'

import { Button } from 'components'

import bg from 'assets/images/bg.svg'
import bgCode from 'assets/images/bg-code.svg'
import bgTime from 'assets/images/bg-time.png'

const Container = styled.div`
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

const TimeContainer = styled.div`
  background-image: url(${bgTime});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  min-width: 800px;
  min-height: 450px;
`

const Time = styled.div`
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

const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  button {
    margin: 0 .5rem;
  }
`

const Timer = ({ onFinish }) => {
  const { time, isRunning, start, stop, restart } = useTimer({ minutes: 300, onFinish })

  const normalizeTime = (time) => {
    if (String(time).length < 2) return '0' + time

    return time
  }

  return (
    <Container>
      <TimeContainer>
        <Time>
          <span>{normalizeTime(Math.floor(time / 60))}</span>
          <span>{normalizeTime(time % 60)}</span>
        </Time>
        <Actions>
          <Button onClick={isRunning ? stop : start}>
            {isRunning ? <FaPause size="1.5rem" /> : <FaPlay size="1.5rem" />}
          </Button>
          <Button onClick={restart}>
            <FaRetweet size="1.5rem" />
          </Button>
        </Actions>
      </TimeContainer>
    </Container>
  )
}

export default Timer