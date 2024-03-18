import { useParticipants } from 'Participants/state'

import { useTimer } from 'hooks'

import { useSound } from "use-sound";
import timeupRingtone from "../assets/audio/timeup-ringtone.mp3";

import Actions from './Actions'

import { Container, TimeContainer, Time } from './Timer.styles'

const Timer = () => {
  const { nextParticipant } = useParticipants()
  const { time, isRunning, isFinished, start, stop, restart, getNext } = useTimer({ minutes: 300, nextParticipant })

  const normalizeTime = (time) => {
    if (String(time).length < 2) return '0' + time

    return time
  }

  const [play] = useSound(timeupRingtone, { volume: 0.8 });

  return (
    <>
      {isFinished && play()}
      <Container>
        <TimeContainer>
          <Time>
            <span>{normalizeTime(Math.floor(time / 60))}</span>
            <span>{normalizeTime(time % 60)}</span>
          </Time>
          <Actions {...{ isRunning, start, stop, restart, getNext }} />
        </TimeContainer>
      </Container>
    </>
  )
}

export default Timer
