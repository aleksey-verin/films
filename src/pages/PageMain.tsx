import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { IRootState } from '../store/store'
import Filters from '../components/Main/Filters'
import Results from '../components/Main/Results'
// import { IFilms } from '../types/types'
// import {
//   resetOffset,
//   setLengthOfFilteredList,
//   setShownList
// } from '../store/actions/actionsPagination'

const PageMain = () => {
  /////=========================================== поместить куда-то
  // useEffect(() => {
  //   setShownList(filteredList.slice(offset - pagination, offset)) ////
  // }, [offset, filteredList])
  /////=========================================== поместить куда-то

  return (
    <main>
      <div className="main-wrapper">
        <Filters
        // filteredList={filteredList}
        // getSorting={getSorting}
        // getFilterYear={getFilterYear}
        // sorting={sorting}
        // filterYear={filterYear}
        // getFilterGenres={getFilterGenres}
        // filterGenres={filterGenres}
        // resetAllFilters={resetAllFilters}
        // userFilmList={userFilmList}
        // getUserFilmList={getUserFilmList}
        />
        <Results />
      </div>
    </main>
  )
}

export default PageMain
