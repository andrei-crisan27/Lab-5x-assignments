import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import IndividualsShowAll from './components/individuals/IndividualsShowAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <IndividualsShowAll/>
    </React.Fragment>
  )
}

export default App
