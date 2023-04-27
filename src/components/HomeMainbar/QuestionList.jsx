import React from 'react'
import Questions from "./Questions"

const QuestionList = ({questionList}) => {
    
  return (
    <>
    {
      questionList.map((question,index) => (
        <Questions question = {question} key={index}/>
      ))
    }
    </>
  )
}

export default QuestionList