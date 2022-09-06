import { useState } from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import Participants from './Participants'
import data from '../participants.json'
import useParticipants from '../state/useParticipants'

const Container = styled.div`
  display: flex;
  background-color: #4285F4;
  height: 100%;
`

const Timer = () => {
  const randomizedData = data.sort(() => Math.random() - 0.5)
  const [newP, setNewP] = useState('')
  const [curr, setCurr] = useState({ pilot: randomizedData[0], copilot: randomizedData[1] })
  // const [participants, setParticipants] = useState(randomizedData.slice(2, randomizedData.length))
  const { participants, getNext, addParticipant} = useParticipants()
  const time = new Date();

  console.log('ssss', participants)

  time.setSeconds(time.getSeconds() + 300);

  // const getNext = () => {
  //   const nextCopilot = participants.shift()
    
  //   // setParticipants([...participants, curr.pilot])
  //   setCurr({ pilot: curr.copilot, copilot: nextCopilot })
  // }

  const addNew = () => {
    setNewP('')
    addParticipant(newP)
  }

  return (
    <Container>
      <div>
        <button onClick={getNext}>Get next</button>
        <input onChange={(e) => setNewP(e.target.value)} />
        <button onClick={addNew}>Add new</button>
      </div>
      {/* <Counter expiryTimestamp={time} onExpire={getNext} />
      <Participants participants={participants} curr={curr} /> */}
    </Container>
  )
}

export default Timer
