import styled from 'styled-components'

import { useParticipants } from 'state/participants'

import Participants from './Participants'
import Timer from './Timer'

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