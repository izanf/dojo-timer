import React from 'react'
import styled from 'styled-components'

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

const Participants = ({ participants, curr }) => {
  
  return (
    <Container>
      <Header>Participantes</Header>
      <ItemContainer>
        <Title>Piloto:</Title>
        <Item>{curr.pilot}</Item>
      </ItemContainer>
      <ItemContainer>
        <Title>Co-piloto:</Title>
        <Item>{curr.copilot}</Item>
      </ItemContainer>
      <ItemContainer>
        <Title>Proximo:</Title>
        <Item>{participants[0]}</Item>
      </ItemContainer>
      <List>
        {participants.slice(1, participants.length).map(item => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Participants
