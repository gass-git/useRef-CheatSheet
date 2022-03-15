import React from 'react'
import { useState, useRef, useEffect } from 'react'

/** ABOUT useRef
 * 
 * - preserves value
 * - does NOT trigger re-render as useState does
 * - targets DOM node/elements
 * 
 * It can be used to count like useState does and also to
 * extract data from the elements without without re-rendering the component
 * everytime. 
 * 
 */

export default function App() {
  const count = useRef(0)
  const rendersCount = useRef(1)
  const [forcedRenders, addForcedRender] = useState(0)
  const inputContainer = useRef(null)

  /** FORM SUBMIT HANDLER
   * 
   * - event.preventDefault() prevents the page to be reload.
   * - inputContainer.current returns the input element.
   */
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
