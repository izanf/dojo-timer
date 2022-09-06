import React, { createContext, useContext, useState, useCallback } from 'react'


const DEFAULT_VALUE = {
  participants: [],
  addParticipant: () => undefined,
  getNext: () => undefined
}

const ParticipantsContext = createContext(DEFAULT_VALUE)

export const ParticipantsProvider = ({ children }) => {
  const [removeds, setRemoved] = useState([])
  const [participants, setParticipants] = useState([])

  const addParticipant = (participant) => {
    setParticipants([...participants, participant])
  }

  const removeParticipant = (participant) => {
    setParticipants(participants.filter(item => item !== participant))
  }

  const getNext = () => {
    const current = participants.shift()

    setRemoved([current, ...removeds])
    setParticipants(participants)
  }

  const getParticipants = () => {
    const all = participants.filter(participant => removeds.find(removed => participant !== removed))
    const pilot = all.shift()
    const copilot = all.shift()

    console.log('func', all)

    return {
      participants: all,
      pilot,
      copilot
    }
  }
  
  return (
    <ParticipantsContext.Provider value={{
      participants: getParticipants(),
      addParticipant,
      removeParticipant,
      getNext
    }}>
      {children}
    </ParticipantsContext.Provider>
  )
}

const useParticipants = () => {
  const context = useContext(ParticipantsContext)

  if (context === undefined) {
    throw new Error('useParticipants must be used within a Participants.Provider')
  }

  return context
}

export default useParticipants
