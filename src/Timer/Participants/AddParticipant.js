import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: .5rem;
`

const Button = styled.button`
  padding: .5rem;
  margin-left: .5rem;
`

const Input = styled.input`
  flex: 1;
  padding: .5rem;
`

const AddParticipant = ({ onAdd }) => {
  const [name, setName] = useState('')

  const handleAdd = () => {
    if (!name.length) return

    onAdd(name)
    setName('')
  }

  return (
    <Wrapper>
      <Input onChange={(e) => setName(e.target.value)} value={name} />
      <Button onClick={handleAdd}>add participant</Button>
    </Wrapper>
  )
}

export default AddParticipant
