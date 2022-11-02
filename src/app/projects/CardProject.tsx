'use client'

import { useState } from 'react'
import ToggleButtonShowCard from './ToggleButtonShowCard'

const CardProject = ({ children }) => {
  const [show, setShow] = useState(true)
  const handleShowCard = () => setShow(!show)

  return (
    <article
      style={{
        position: 'relative',
        transition: 'all .3s',
        height: show ? 'auto' : '3rem',
        border: '1px solid #ffffff5e',
        padding: '1rem',
        margin: '1rem',
        overflow: show ? 'hidden' : 'auto'
      }}
    >
      {show && (
        <ToggleButtonShowCard onClick={handleShowCard}>
          Hide
        </ToggleButtonShowCard>
      )}
      {!show && (
        <ToggleButtonShowCard onClick={handleShowCard}>
          Show
        </ToggleButtonShowCard>
      )}
      {children}
    </article>
  )
}

export default CardProject
