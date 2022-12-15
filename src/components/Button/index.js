import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.color || '#34A853'};
  padding: 10px 15px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`

export default Button
