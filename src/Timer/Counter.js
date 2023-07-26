import { useTimer } from 'react-timer-hook';
import styled from 'styled-components'

import { useParticipants } from 'state/participants'
import getDatePlusMinutes from 'utils/getDatePlusMinutes';

import Button from '../components/Button'

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Count = styled.span`
  font-size: 300px;
  color: #FBBC05;
`

const Controls = styled.div`
  display: flex;
  gap: 5px;
`

const Status = styled.span`
  color: white;
  font-weight: bold;
  margin-bottom: 15px;
`

const Counter = () => {
  const { getNext } = useParticipants()
  const expiryTimestamp = getDatePlusMinutes(5)

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: getNext, autoStart: false });

  const _restart = () => {
    restart(expiryTimestamp)
    pause()
  }

  return (
    <Container>
      <Count>
        <span>{formatDigits(minutes)}</span>:<span>{formatDigits(seconds)}</span>
      </Count>
      <Status>{isRunning ? 'Contando...' : 'Parado.'}</Status>
      <Controls style={{ textAlign: 'center' }}>
        <Button onClick={getNext}>Proximo</Button>
        <Button onClick={isRunning ? pause : start}>{isRunning ? 'Pausar' : 'Iniciar'}</Button>
        <Button onClick={_restart}>Reiniciar</Button>
      </Controls>
    </Container>
  );
}

export default Counter

const formatDigits = (n) =>
  n.toLocaleString("pt-BR", { minimumIntegerDigits: 2 });