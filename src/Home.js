import styled from 'styled-components'

import { useParticipants } from 'Participants/state'

import Participants from './Participants'
import Timer from './Timer/Timer'

const Container = styled.div`
  display: flex;
  height: 100%;
`

const Home = () => {
  const { getNext } = useParticipants()

  return (
    <Container>
      <Participants />
      <Timer onFinish={getNext} />
    </Container>
  )
}

export default Home