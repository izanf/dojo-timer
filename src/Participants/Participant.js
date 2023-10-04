import styled from 'styled-components'

const Wrapper = styled.li`
  color: #333;
  padding: .5rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid #333;
  }
`

const Title = styled.h4`
  font-size: .8rem;
`

const NameContainer = styled.div`
  display: flex;
`

const Name = styled.span`
  flex: 1;
  line-height: 1.5rem;
  font-size: 1.5rem;
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
