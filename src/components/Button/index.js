import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${props => props.color || '#2B2930'};
  padding: 1rem;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border-radius: 1rem;

  ${({ full }) => full && `
    width: 100%;  
  `}
`

export default Button
