import React from 'react'
import styled from 'styled-components'

import AddParticipant from './AddParticipant'

const Container = styled.div`
  flex: 1;
  background: #EA4335;
  padding: 20px;
`

const Header = styled.h1`
  font-size: 32px;
  color: #34A853;
  margin-bottom: 36px;
`

const List = styled.ul``

const ListItem = styled.li`
  color: white;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
`

const ItemContainer = styled.div`
  margin-bottom: .5rem;
`

const Title = styled.h4`
  font-size: 18px;
  color: #EEE;
`

const Item = styled(ListItem).attrs({ as: 'span' })`
  font-size: 24px;
  line-height: 28px;
`

const ParticipantsContainer = styled.div``

const Participants = ({ participants, addParticipant }) => {
  const pilot = participants.shift()
  const copilot = participants.shift()
  const next = participants.shift()

  return (
    <Container>
      <ParticipantsContainer>
        <Header>Participantes</Header>
        <ItemContainer>
          <Title>Piloto:</Title>
          <Item>{pilot}</Item>
        </ItemContainer>
        <ItemContainer>
          <Title>Co-piloto:</Title>
          <Item>{copilot}</Item>
        </ItemContainer>
        <ItemContainer>
          <Title>Proximo:</Title>
          <Item>{next}</Item>
        </ItemContainer>
        <List>
          {participants.map(item => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </ParticipantsContainer>
      <AddParticipant onAdd={addParticipant} />
    </Container>
  )
}

export default Participants
