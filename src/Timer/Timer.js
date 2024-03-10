
import { useTimer } from 'hooks'

import Actions from './Actions'

import { Container, TimeContainer, Time } from './Timer.styles'

const Timer = ({ onFinish }) => {
  const { time, isRunning, start, stop, restart, getNext } = useTimer({ minutes: 300, onFinish })

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
        <Actions {...{ isRunning, start, stop, restart, getNext }} />
      </TimeContainer>
    </Container>
  )
}

export default Timer