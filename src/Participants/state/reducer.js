import ACTIONS from './actions'

const participantsReducer = (state, action) => {
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
        participants: action?.participants
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

export default participantsReducer
