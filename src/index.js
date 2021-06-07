import React, { useState } from 'react';
import { render } from "react-dom";

{/*function Compteur () {
  const [ count, setCount] = useState(0)
  const handleClick = function (e) {
    e.preventDefault()
    setCount(10)
  }
  return <button onClick={handleClick}>Nombre : {count}</button>
}*/}

{/*function Compteur () {
  const [ state, setState] = useState({})
  const handleClick = function (e) {
    e.preventDefault()
    setState(state => {
      return {...state, count: 10}
    })
  }
  return <div onClick={handleClick}>{JSON.stringify(state)}</div>
}*/}

{/*function Compteur () {
  const [ count, setCount] = useState(0)
  const [ count2, setCount2] = useState(0)

  const handleClick = function (e) {
    e.preventDefault()
    setCount(count => count + 1)
  }

  const handleClick2 = function (e) {
    e.preventDefault()
    setCount2(count => count + 2)
  }
*/}

function useIncrement (initial, step) {
  const [count, setCount] = useState(initial)
  const increment = () => {
    setCount(count => count + step)
  }
  return [count, increment]
}

function Compteur () {
  const [count, increment] = useIncrement(0, 2)

  return <>
    <button onClick={increment}> Incrementer {count}</button>
  </>
}


render (
  <div>
    <Compteur />
  </div>,
  document.getElementById('root')
)

//useState ne peut etre dans une condition ou une boucle