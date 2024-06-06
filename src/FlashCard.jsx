import React from 'react'
import { useState } from 'react'

export default function FlashCard({ flashCard }) {
  const [flip, setFlip] = useState(false)
    return (
    <div onClick={() => setFlip(!flip)}>
        {flip ? flashCard.answer : flashCard.question}
    </div>
  )
}
