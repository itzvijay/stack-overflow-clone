import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import upvote from "../../assets/sort-up.svg"
import downvote from "../../assets/sort-down.svg"
import Avatar from "../../components/Avatar/Avatar"
import "./Questions.css"
import DisplayAnswer from './DisplayAnswer';
const QuestionDetails = () => {
    const { id } = useParams();
    console.log(id);
    let questionList = [{
        id: "1",
        upVotes: 3,
        downVotes:2,
        noOfAnswers: 2,
        questionTitle: "what is the function",
        questionBody: "It meant To be",
        questionTag: ["java", "node JSON", "express js", "mongoDB", "Javascript", "python", "c++"],
        userPosted: "Vijay",
        askedOn: "26 jan",
        answer: [
            {
                answerBody: "Answer",
                userAnswered: "Vijay Shirsath",
                answeredOn: "28 jan",
                userId: 2
            }
        ]
    }, {
        id: "2",
        upVotes: 3,
        downVotes:2,
        noOfAnswers: 2,
        questionTitle: "what is the function",
        questionBody: "It meant To be",
        questionTag: ["java", "node JSON", "express js", "mongoDB", "Javascript", "python", "c++"],
        userPosted: "Vijay",
        askedOn: "26 jan",
        answer: [
            {
                answerBody: "Answer",
                userAnswered: "Vijay Shirsath",
                answeredOn: "28 jan",
                userId: 2
            }
        ]
    }, {
        id: "3",
        upVotes: 3,
        downVotes:2,
        noOfAnswers: 2,
        questionTitle: "what is the function",
        questionBody: "It meant To be",
        questionTag: ["java", "node JSON", "express js", "mongoDB", "Javascript", "python", "c++"],
        userPosted: "Vijay",
        askedOn: "26 jan",
        answer: [
            {
                answerBody: "Answer",
                userAnswered: "Vijay Shirsath",
                answeredOn: "28 jan",
                userId: 2
            }
        ]
    }
    ]
    return (
        <div className="question-details-page">
            {questionList === null ? (
                <h1>Loading...</h1>
            ) : (
                <>
                {questionList
                  .filter((question) => question.id === id)
                  .map((question) => (
                    <div key={question.id}>
                      <section className="question-details-container">
                        <h1>{question.questionTitle}</h1>
                        <div className="question-details-container-2">
                          <div className="question-upVotes">
                            <img
                              src={upvote}
                              alt=""
                              width="18"
                              className="upVotes-icon"
                            />
                            <p>{question.upVotes - question.downVotes}</p>
                            <img
                              src={downvote}
                              alt=""
                              width="18"
                              className="upVotes-icon"
                            />
                          </div>
                          <div style={{ width: "100%" }}>
                            <p className="question-body">{question.questionBody}</p>
                            <div className="question-details-tags">
                              {question.questionTag.map((tag) => (
                                <p key={tag}>{tag}</p>
                              ))}
                            </div>
                            <div className="question-actions-user">
                              <div>
                                <button type="button">
                                  Share
                                </button>
                                  <button type="button">
                                    Delete
                                  </button>
                              </div>
                              <div>
                                <p>asked {question.askedOn}</p>
                                <Link
                                  to={`/Users/${question.userId}`}
                                  className="user-link"
                                  style={{ color: "#0086d8" }}
                                >
                                  <Avatar
                                    backgroundColor="orange"
                                    px="8px"
                                    py="5px"
                                    borderRadius="4px"
                                  >
                                    {question.userPosted.charAt(0).toUpperCase()}
                                  </Avatar>
                                  <div>{question.userPosted}</div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
              {/* here if the number of answers should be greater than one then the section will be show */}
                        {question.noOfAnswers !== 0 && (
                          <section>
                            <h3>{question.noOfAnswers} Answers</h3>
                            <DisplayAnswer key={question.id} question = {question}/>
                          </section>
                        ) }
                        <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      value={question.answer}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTag.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
                    </div>
                  ))}
              </>
            )}
        </div>
    );
}

export default QuestionDetails