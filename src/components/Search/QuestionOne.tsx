import React from 'react'
import { useSelector } from 'react-redux'
import { selectorReducerGenres } from '../../store/reducers/reducerGenres'

interface QuestionOneProps {
  handleGenre: (id: number) => void
}

const QuestionOne = ({ handleGenre }: QuestionOneProps) => {
  const { genresData: genres } = useSelector(selectorReducerGenres)

  return (
    <div className="question">
      <h2 className="question-title">Выберите жанр:</h2>
      <div className="question-variants">
        {genres.map((item) => (
          <button
            onClick={() => handleGenre(item.id)}
            key={item?.id}
            className="question-variants__item">
            {item?.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuestionOne
