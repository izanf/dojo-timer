import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Button = styled.button``

const Input = styled.input``

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
