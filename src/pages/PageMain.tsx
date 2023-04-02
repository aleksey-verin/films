import React from 'react'
import Filters from '../components/Main/Filters'
import Results from '../components/Main/Results'

const PageMain = () => {
  return (
    <main>
      <div className="main-wrapper">
        <Filters />
        <Results />
      </div>
    </main>
  )
}

export default PageMain
