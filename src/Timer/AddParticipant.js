import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div``

const AddParticipant = ({ onAdd }) => {
  const [participant, setParticipant] = useState('')

  return (
    <Container>
      <label htmlFor="add-participant">Adicionar participante</label>
      <input id="add-participant" value={participant} onChange={e => setParticipant(e.target.value)} />
      <button onClick={() => onAdd(participant)}>Adicionar</button>
    </Container>
  )
}

export default AddParticipant
