import styled from 'styled-components'

const Wrapper = styled.li`
  margin-bottom: .5rem;
  color: white;
`

const Title = styled.h4`
  font-size: .8rem;
`

const NameContainer = styled.div`
  display: flex;
`

const Name = styled.span`
  flex: 1;
`

const RemoveButton = styled.button`
  cursor: pointer;
`

const titles = ['Piloto', 'Co-piloto', 'Próximo']

const Participant = ({ data, index, removeParticipant }) => {
  const renderTitle = () => {
    if (index > 3) return null

    return <Title>{titles[index]}</Title>
  }

  return (
    <Wrapper>
      {renderTitle()}
      <NameContainer>
        <Name>{data.name}</Name>
        <RemoveButton onClick={() => removeParticipant(data?.id)}>X</RemoveButton>
      </NameContainer>
    </Wrapper>
  )
}

export default Participant
