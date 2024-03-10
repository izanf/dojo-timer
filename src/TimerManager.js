import { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import useLocalStorage from "./hooks/useLocalStorage";
import Timer from "./Timer/Timer";

function TimerManager() {
  const [ready, setReady] = useState(false);
  const [participants, setParticipants] = useLocalStorage("participants", [
    "",
    "",
    "",
  ]);

  if (ready) {
    return <Timer participants={participants.filter(Boolean)} />;
  }

  return (
    <Container>
      <h1>Participantes</h1>

      {participants.map((partipant, index) => {
        return (
          <Row key={`participant_${index}`}>
            <Input
              placeholder="Nome"
              value={partipant}
              onChange={(event) => {
                const { value } = event.target;

                setParticipants((arr) => {
                  arr[index] = value;
                  return [...arr];
                });
              }}
            />
            <Button
              color="#ef8354"
              onClick={() => {
                setParticipants((arr) => arr.filter((_, x) => x !== index));
              }}
            >
              Remover
            </Button>
          </Row>
        );
      })}
      <Actions>
        <Button
          color="#00c49a"
          onClick={() => {
            setParticipants((arr) => [...arr, ""]);
          }}
        >
          Adicionar
        </Button>

        <Button
          color="#4381c1"
          onClick={() => {
            setReady(true);
          }}
        >
          Pronto
        </Button>
      </Actions>
    </Container>
  );
}

export default TimerManager;

const Container = styled.div`
  margin: 24px auto;
  width: 720px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 5px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
