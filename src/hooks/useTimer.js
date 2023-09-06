import { useState, useRef } from 'react'

const useTimer = ({ minutes }) => {
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
  
  return {
    minutes: Math.ceil(time / 60),
    seconds: time,
    isRunning,
    start,
    stop
  }
}

export default useTimer
