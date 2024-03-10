import styled from 'styled-components'
import { FaRetweet, FaPlay, FaPause, FaAngleDoubleRight } from 'react-icons/fa'

import { Button } from 'components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  button {
    margin: 0 .5rem;
  }
`

const Actions = ({ isRunning, start, stop, restart, getNext }) => (
  <Container>
    <Button onClick={restart}><FaRetweet size="1.5rem" /></Button>
    <Button onClick={isRunning ? stop : start}>
      {isRunning ? <FaPause size="1.5rem" /> : <FaPlay size="1.5rem" />}
    </Button>
    <Button onClick={getNext}><FaAngleDoubleRight size="1.5rem" /></Button>
  </Container>
)

export default Actions
