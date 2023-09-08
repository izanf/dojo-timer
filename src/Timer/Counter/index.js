import { useParticipants } from 'state/participants'

import useTimer from 'hooks/useTimer'

import Button from '../../components/Button'

import { Container, Count, Controls, Status } from './styles'

const Counter = () => {
  const { getNext } = useParticipants()
  const { time, isRunning, start, stop, restart } = useTimer({ minutes: 5, onFinish: getNext })

  return (
    <Container>
      <Count>
        <span>{Math.floor(time / 60)}</span>:<span>{time % 60}</span>
      </Count>
      <Status>{isRunning ? 'Contando...' : 'Parado.'}</Status>
      <Controls style={{ textAlign: 'center' }}>
        <Button onClick={getNext}>Proximo</Button>
        <Button onClick={isRunning ? stop : start}>{isRunning ? 'Pausar' : 'Iniciar'}</Button>
        <Button onClick={restart}>Reiniciar</Button>
      </Controls>
    </Container>
  );
}

export default Counter
