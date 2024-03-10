import styled from 'styled-components'

import Participants from './Participants'
import Timer from './Timer/Timer'

const Container = styled.div`
  display: flex;
  height: 100%;
`

const Home = () => (
  <Container>
    <Participants />
    <Timer />
  </Container>
)

export default Home