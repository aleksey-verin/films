import React from 'react'
import { userAnswer } from '../../pages/PageSearch'

interface QuestionTwoProps {
  handleScore: (score: string) => void
}

const QuestionTwo = ({ handleScore }: QuestionTwoProps) => {
  return (
    <div className="question">
      <h2 className="question-title">Оценка фильма:</h2>
      <div className="question-variants">
        <button onClick={() => handleScore(userAnswer.high)} className="question-variants__item">
          Высокая
        </button>
        <button onClick={() => handleScore(userAnswer.low)} className="question-variants__item">
          Низкая
        </button>
      </div>
    </div>
  )
}

export default QuestionTwo
