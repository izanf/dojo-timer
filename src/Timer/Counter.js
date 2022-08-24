import { useTimer } from 'react-timer-hook';
import styled from 'styled-components'

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

const Controls = styled.div``

const Status = styled.span`
  color: white;
  font-weight: bold;
  margin-bottom: 15px;
`

const Counter = ({ expiryTimestamp, onExpire }) => {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire, autoStart: true });

  const _restart = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    restart(time)
  }

  return (
    <Container>
      <Count><span>{minutes}</span>:<span>{seconds}</span></Count>
      <Status>{isRunning ? 'Contando...' : 'Parado.'}</Status>
      <Controls style={{ textAlign: 'center' }}>
        <Button onClick={onExpire}>Proximo</Button>
        <Button onClick={start}>Iniciar</Button>
        <Button onClick={pause}>Pausar</Button>
        <Button onClick={resume}>Continuar</Button>
        <Button onClick={_restart}>Reiniciar</Button>
      </Controls>
    </Container>
  )
}

export default Counter
