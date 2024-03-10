import React from 'react'
import styled from 'styled-components'

import Controls from './Controls'
import Participant from './Participant'

import { useParticipants } from 'Participants/state'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
`

const Header = styled.h1`
  font-size: 32px;
  color: #557EBF;
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
      <Controls onAdd={addParticipant} onRandomize={randomizeParticipants} />
    </Container >
  )
}

export default Participants