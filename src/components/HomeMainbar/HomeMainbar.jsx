import React from 'react'
import {Link, useLocation,useNavigate} from "react-router-dom"
import QuestionList from './QuestionList';
import "./HomeMainbar.css";

const HomeMainbar = () => {
  const location = useLocation();  //useLocation is something that checks the url path of our website
  const user = null;
  const navigate = useNavigate();

  let questionList = [{
    id:1,
    votes:3,
    noOfAnswers:2,
    questionTitle:"what is the function",
    questionBody:"It meant To be",
    questionTag:["java","node JSON","express js","mongoDB","Javascript","python","c++"],
    userPosted:"Vijay",
    askedOn:"26 jan",
    answer : [
      {
        answerBody:"Answer",
        userAnswered:"Vijay Shirsath",
        answeredOn:"28 jan",
        userId:2
      }
    ]
  },{
    id:2,
    votes:3,
    noOfAnswers:2,
    questionTitle:"what is the function",
    questionBody:"It meant To be",
    questionTag:["java","node JSON","express js","mongoDB","Javascript","python","c++"],
    userPosted:"Vijay",
    askedOn:"26 jan",
    answer : [
      {
        answerBody:"Answer",
        userAnswered:"Vijay Shirsath",
        answeredOn:"28 jan",
        userId:2
      }
    ]
  },{
    id:3,
    votes:3,
    noOfAnswers:2,
    questionTitle:"what is the function",
    questionBody:"It meant To be",
    questionTag:["java","node JSON","express js","mongoDB","Javascript","python","c++"],
    userPosted:"Vijay",
    askedOn:"26 jan",
    answer : [
      {
        answerBody:"Answer",
        userAnswered:"Vijay Shirsath",
        answeredOn:"28 jan",
        userId:2
      }
    ]
  }
]
const checkAuth = () => {
    if(user === null){
      alert("please sign up to ask the questions");
      navigate("/Auth");
    }else{
      navigate("/AskQuestion")
    }
}
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {location.pathname === "/" ? (<h1>Top Questions</h1>):(<h1>All Questions</h1>)}
        <button onClick = {checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {questionList === null ? (<h1>Loading</h1>):
        <>
        <p>{questionList.length} questions</p>
        <QuestionList questionList = {questionList}/>
        </>}
      </div>
    </div>
  )
}

export default HomeMainbar