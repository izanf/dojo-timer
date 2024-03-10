import { useReducer, createContext, useContext, useEffect } from 'react'

import { useLocalStorage } from 'hooks'
import reducer from './reducer'

import ACTIONS from './actions'

const ParticipantsContext = createContext()

const INITIAL_STATE = {
  count: 0,
  participants: []
}
const MIN_PARTICIPANTS = 3

function ParticipantsProvider({ children }) {
  const [storedParticipants, setStoredParticipants] = useLocalStorage('participants', INITIAL_STATE)
  const [state, dispatch] = useReducer(reducer, storedParticipants)

  const addParticipant = (participant) => {
    dispatch({ type: ACTIONS.PARTICIPANTS_ADD, participant })
  }

  const removeParticipant = (id) => {
    dispatch({ type: ACTIONS.PARTICIPANTS_REMOVE, id })
  }

  const nextParticipant = () => {
    const { participants } = state

    if (participants.length < MIN_PARTICIPANTS) return
  
    const firstItem = participants.shift()

    dispatch({ type: ACTIONS.PARTICIPANTS_NEXT, participants: [...participants, firstItem] })
  }

  const randomizeParticipants = () => {
    dispatch({ type: ACTIONS.PARTICIPANTS_RANDOMIZE })
  }

  useEffect(() => {
    setStoredParticipants(state)
  }, [setStoredParticipants, state])

  const value = {
    ...state,
    addParticipant,
    removeParticipant,
    randomizeParticipants,
    nextParticipant
  }

  return <ParticipantsContext.Provider value={value}>{children}</ParticipantsContext.Provider>
}

function useParticipants() {
  const context = useContext(ParticipantsContext)

  if (context === undefined) {
    throw new Error('useParticipants must be used within a ParticipantsProvider')
  }

  return context
}

export { ParticipantsProvider, useParticipants }
