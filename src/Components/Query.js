import React from 'react'

const Query = ({ onClick, question }) => {
  // console.log(query)
  return (
    <div className=''>
      <form>
        <div className='registerInput'>
          <label> Subject </label>
          <input type='text' value={question.subject} readOnly/>
        </div>
        <div className='registerInput'>
          <label> Query Text </label>
          <textarea type='text' rows={4} maxLength={200} 
          value={question.text} readOnly />
        </div>
        <div className='registerInput'>
          <label> Resolution </label>
          <input type='text' 
          value={question.resolution} readOnly/>
        </div>
        <input className='registerButton'
         type='submit' onClick={onClick} value='Close' />
      </form>
    </div>
  )
}

export default Query
