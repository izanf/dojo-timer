import styled from 'styled-components'
import Counter from './Counter'
import Participants from './Participants'

const Container = styled.div`
  display: flex;
  background-color: #EEE;
  height: 100%;
`

const Timer = () => {
  return (
    <Container>
      {/* <button onClick={getNext}></button> */}
      <Counter />
      <Participants />
    </Container>
  )
}

export default Timer
