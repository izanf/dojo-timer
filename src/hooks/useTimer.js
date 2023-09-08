import { useState, useRef, useEffect } from 'react'

const useTimer = ({ minutes, onFinish }) => {
  const interval = useRef(null)
  const [time, setTime] = useState(minutes)
  const [isRunning, setIsRunning] = useState(false)

  const decreaseTime = () => {
    setTime((prevTime) => prevTime - 1)
  }

  const start = () => {
    if (!interval.current) {
      interval.current = setInterval(decreaseTime, 1000)
      setIsRunning(true)
    }
  }

  const stop = () => {
    clearInterval(interval.current)
    interval.current = null
    setIsRunning(false)
  }

  const restart = () => {
    setTime(minutes)
    stop()
  }

  useEffect(() => {
    if (time <= 0) {
      onFinish?.()
      restart()
    }
  }, [time])
  
  return {
    time,
    isRunning,
    start,
    stop,
    restart
  }
}

export default useTimer
