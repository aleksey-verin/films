import React from 'react'
import { userAnswer } from '../../pages/PageSearch'

interface QuestionThreeProps {
  handlePopular: (score: string) => void
}

const QuestionThree = ({ handlePopular }: QuestionThreeProps) => {
  return (
    <div className="question">
      <h2 className="question-title">Известность фильма:</h2>
      <div className="question-variants">
        <button onClick={() => handlePopular(userAnswer.high)} className="question-variants__item">
          Популярный
        </button>
        <button onClick={() => handlePopular(userAnswer.low)} className="question-variants__item">
          Неизвестный
        </button>
      </div>
    </div>
  )
}

export default QuestionThree
