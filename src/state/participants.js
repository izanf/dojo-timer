import * as React from 'react'

import ACTIONS from 'state/actions'

const ParticipantsContext = React.createContext()

const nextFIFO = (participants) => {
  const firstItem = participants.shift()

  return [...participants, firstItem]
}

function participantsReducer(state, action) {
  switch (action.type) {
    case ACTIONS.PARTICIPANTS_ADD: {
      return {
        ...state,
        count: state.count + 1,
        participants: [...state?.participants, { id: state.count, name: action?.participant }],
      }
    }
    case ACTIONS.PARTICIPANTS_REMOVE: {
      return {
        ...state,
        participants: state?.participants?.filter(item => item.id !== action.id)
      }
    }
    case ACTIONS.PARTICIPANTS_NEXT: {
      return {
        ...state,
        participants: nextFIFO(state.participants),
      }
    }
    case ACTIONS.PARTICIPANTS_RANDOMIZE: {
      return {
        ...state,
        participants: state.participants.sort(() => Math.random() - 0.5)
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const INITIAL_STATE = {
  count: 0,
  participants: []
}

function ParticipantsProvider({ children }) {
  const [state, dispatch] = React.useReducer(participantsReducer, INITIAL_STATE)

  const addParticipant = (participant) => {
    dispatch({ type: ACTIONS.PARTICIPANTS_ADD, participant })
  }

  const removeParticipant = (id) => {
    dispatch({ type: ACTIONS.PARTICIPANTS_REMOVE, id })
  }

  const getNext = () => {
    if (state.participants.length < 3) return

    dispatch({ type: ACTIONS.PARTICIPANTS_NEXT })
  }

  const randomizeParticipants = () => {
    dispatch({ type: ACTIONS.PARTICIPANTS_RANDOMIZE })
  }

  const value = {
    ...state,
    addParticipant,
    removeParticipant,
    randomizeParticipants,
    getNext
  }

  return <ParticipantsContext.Provider value={value}>{children}</ParticipantsContext.Provider>
}

function useParticipants() {
  const context = React.useContext(ParticipantsContext)

  if (context === undefined) {
    throw new Error('useParticipants must be used within a ParticipantsProvider')
  }

  return context
}

export { ParticipantsProvider, useParticipants }
