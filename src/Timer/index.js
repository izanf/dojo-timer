import { useState } from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import Participants from './Participants'

const Container = styled.div`
  display: flex;
  background-color: #4285F4;
  height: 100%;
`

const Timer = () => {
  // const randomizedData = data.sort(() => Math.random() - 0.5)
  // const [curr, setCurr] = useState({ pilot: randomizedData[0], copilot: randomizedData[1] })
  const [participants, setParticipants] = useState([])
  const time = new Date();

  console.log('ssssss', participants)

  time.setSeconds(time.getSeconds() + 300);  

  // const getNext = () => {
  //   const nextCopilot = participants.shift()
    
  //   setParticipants([...participants, curr.pilot])
  //   setCurr({ pilot: curr.copilot, copilot: nextCopilot })
  // }

  const addParticipant = (participant) => {
    setParticipants([...participants, participant])
  }

  return (
    <Container>
      {/* <button onClick={getNext}></button> */}
      <Counter expiryTimestamp={time} onExpire={() => console.log('aaaaa')} />
      <Participants participants={participants} addParticipant={addParticipant} />
    </Container>
  )
}

export default Timer
