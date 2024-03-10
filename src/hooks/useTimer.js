import { useState, useRef, useEffect, useCallback } from 'react'

import { useParticipants } from 'Participants/state'

const useTimer = ({ minutes, onFinish }) => {
  const interval = useRef(null)
  const [time, setTime] = useState(minutes)
  const [isRunning, setIsRunning] = useState(false)
  const { nextParticipant } = useParticipants()

  const decreaseTime = () => {
    setTime((prevTime) => prevTime - 1)
  }

  const start = () => {
    if (!interval.current) {
      interval.current = setInterval(decreaseTime, 1000)
      setIsRunning(true)
    }
  }

  const stop = useCallback(() => {
    clearInterval(interval.current)
    interval.current = null
    setIsRunning(false)
  }, [interval])

  const restart = useCallback(() => {
    setTime(minutes)
    stop()
  }, [minutes, stop])

  const getNext = () => {
    restart()
    nextParticipant()
  }

  useEffect(() => {
    if (time <= 0) {
      onFinish?.()
      restart()
    }
  }, [onFinish, restart, time])
  
  return {
    time,
    isRunning,
    start,
    stop,
    restart,
    getNext
  }
}

export default useTimer
