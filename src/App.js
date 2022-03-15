import React from 'react'
import { useState, useRef, useEffect } from 'react'

export default function App() {
  const count = useRef(0)
  const rendersCount = useRef(1)
  const [forcedRenders, addForcedRender] = useState(0)
  const inputContainer = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    let inputValue = inputContainer.current.value
    console.log(inputValue)
    inputContainer.current.value = null
  }

  function handleClick() {
    count.current++
    console.log(count.current)
  }

  function handleRender() {
    addForcedRender(forcedRenders + 1)
  }

  useEffect(() => {
    rendersCount.current++
    inputContainer.current.focus()
  }, [forcedRenders])

  console.log('the component has rendered: ' + rendersCount.current + ' time/s')

  return (
    <>
      {/* FIRST SECTION */}
      <button onClick={handleRender}>render</button>
      <button onClick={handleClick}>Increment</button>
      <h3>count: {count.current}</h3>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input type='input' ref={inputContainer} />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}
