import React from 'react'

export default function Result({correctAnsCount, tryAgain}) {
  return (
    <div className='quiz-card result-card'>
      <img className='tropy-img' src='https://t3.ftcdn.net/jpg/04/40/39/12/240_F_440391264_BXPdwQGkbPIVEUwWgQ52dxqxqSuMtlKv.jpg' alt='winner tropy' />
      <h2>Results</h2>
      <span>You got <span className='number'>{correctAnsCount}</span> correct Answer</span>
      <button className='try-btn' onClick={()=>tryAgain()}>Try again</button>
    </div>
  )
}
