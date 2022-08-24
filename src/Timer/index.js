import { useState } from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import Participants from './Participants'
import data from '../participants.json'

const Container = styled.div`
  display: flex;
  background-color: #4285F4;
  height: 100%;
`

const Timer = () => {
  const randomizedData = data.sort(() => Math.random() - 0.5)
  const [curr, setCurr] = useState({ pilot: randomizedData[0], copilot: randomizedData[1] })
  const [participants, setParticipants] = useState(randomizedData.slice(2, randomizedData.length))
  const time = new Date();

  time.setSeconds(time.getSeconds() + 300);

  const getNext = () => {
    const nextCopilot = participants.shift()
    
    setParticipants([...participants, curr.pilot])
    setCurr({ pilot: curr.copilot, copilot: nextCopilot })
  }

  return (
    <Container>
      {/* <button onClick={getNext}></button> */}
      <Counter expiryTimestamp={time} onExpire={getNext} />
      <Participants participants={participants} curr={curr} />
    </Container>
  )
}

export default Timer
