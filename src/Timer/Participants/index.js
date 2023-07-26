import React from 'react'
import styled from 'styled-components'

import AddParticipant from './AddParticipant'
import Participant from './Participant'
import Button from 'components/Button'

import { useParticipants } from 'state/participants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #EA4335;
  padding: 20px;
`

const Header = styled.h1`
  font-size: 32px;
  color: #34A853;
  margin-bottom: 36px;
`

const List = styled.ul`
  flex: 1;
`

const Participants = () => {
  const { participants, addParticipant, removeParticipant, randomizeParticipants } = useParticipants()

  return (
    <Container>
      <Header>Participantes</Header>
      <List>
        {participants.length < 3 ? (
          <p>Precisamos de pelo menos 3 participantes...</p>
        ) : participants.map((data, index) => <Participant key={data.id} {...{ data, index, removeParticipant }} />)}
      </List>
      <AddParticipant onAdd={addParticipant} />
      <Button onClick={randomizeParticipants}>Randomize</Button>
    </Container >
  )
}

export default Participants
