import { useState } from 'react'
import styled from 'styled-components'

import { Button } from 'components'

const Input = styled.input`
  border-radius: .5rem;
  padding: 0 .5rem;
`

const Container = styled.div``

const AddContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  button {
    margin-left: .5rem;
  }
`

const AddParticipant = ({ onAdd, onRandomize }) => {
  const [name, setName] = useState('')

  const handleAdd = () => {
    if (!name.length) return

    onAdd(name)
    setName('')
  }

  return (
    <Container>
      <Button full onClick={onRandomize}>Randomize</Button>
      <AddContainer>
        <Input onChange={(e) => setName(e.target.value)} value={name} onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAdd()
          }
        }}/>
        <Button onClick={handleAdd}>Add</Button>
      </AddContainer>
    </Container>
  )
}

export default AddParticipant
