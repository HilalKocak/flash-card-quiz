import { useState } from 'react'
import FlashCardList from './FlashCardList'
import './App.css'

function App() {
  const [flashCards, setFlashCards] = useState(SAMPLE_FLASHCARDS)

  return (
    <>
      <div>
       <FlashCardList flashCards={flashCards}/>
      </div>
   
    </>
  )
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'What is the capital of France?',
    answer: 'Paris',
    options: [
      'Berlin',
      'Madrid',
      'Paris',
      'Rome'
    ]
  },
  {
    id: 3,
    question: 'Which planet is known as the Red Planet?',
    answer: 'Mars',
    options: [
      'Earth',
      'Jupiter',
      'Mars',
      'Saturn'
    ]
  },
  {
    id: 4,
    question: 'What is the largest ocean on Earth?',
    answer: 'Pacific Ocean',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Pacific Ocean',
      'Arctic Ocean'
    ]
  },
  {
    id: 5,
    question: 'Who wrote "Romeo and Juliet"?',
    answer: 'William Shakespeare',
    options: [
      'Charles Dickens',
      'William Shakespeare',
      'Jane Austen',
      'Mark Twain'
    ]
  }
]

export default App
