import { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Microsoft", isCorrect: false },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButton = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      alert('Your answer is correct!');
    }else{
      alert('Your answer is false!');
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="App">
      {showScore ? (
        <div className="question answer">{`You scored ${score} out of ${questions.length}`}</div>
      ) : (
        <div className="question">
          <div className="question-section">
            <div className="question-counts">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, count) => {
                return (
                  <button
                    key={count}
                    onClick={() => {
                      handleAnswerButton(answerOption.isCorrect);
                    }}
                  >
                    {answerOption.answerText}
                  </button>
                );
              }
            )}

            {/* <button>Answer 3</button>
              <button>Answer 4</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
