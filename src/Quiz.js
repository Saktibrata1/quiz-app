import React, { useState } from 'react';
import './quizstyle.css';

const QuizComp = () => {
  const Questionbank = [
    {
      Question: 'What is the capital of France?',
      Answers: [
        { Answer: 'Delhi', isCorrect: false },
        { Answer: 'Paris', isCorrect: true },
        { Answer: 'Rome', isCorrect: false },
        { Answer: 'Lisbon', isCorrect: false }
      ]
    },
    {
      Question: 'Who is the president of India?',
      Answers: [
        { Answer: 'Pratibha Patil', isCorrect: false },
        { Answer: 'S Jaishankar', isCorrect: false },
        { Answer: 'Draupadi Murmu', isCorrect: true },
        { Answer: 'Ram Nath Kovind', isCorrect: false }
      ]
    },
    {
      Question: '100/25 = ?',
      Answers: [
        { Answer: '4.0', isCorrect: true },
        { Answer: '5.5', isCorrect: false },
        { Answer: '7.5', isCorrect: false },
        { Answer: '2.5', isCorrect: false }
      ]
    },
    {
      Question: 'What comes after September?',
      Answers: [
        { Answer: 'October', isCorrect: true },
        { Answer: 'August', isCorrect: false },
        { Answer: 'November', isCorrect: false },
        { Answer: 'July', isCorrect: false }
      ]
    },
    {
      Question: 'Which among the following is a JavaScript framework?',
      Answers: [
        { Answer: 'Bootstrap', isCorrect: false },
        { Answer: 'Python', isCorrect: false },
        { Answer: 'Java', isCorrect: false },
        { Answer: 'React', isCorrect: true }
      ]
    },
    {
      Question: 'Which car company did Tata acquire?',
      Answers: [
        { Answer: 'Maserati', isCorrect: false },
        { Answer: 'Ford', isCorrect: false },
        { Answer: 'Lancer', isCorrect: false },
        { Answer: 'Jaguar', isCorrect: true }
      ]
    },
    {
      Question: 'Which is the only mammal that can fly?',
      Answers: [
        { Answer: 'Flying squirrel', isCorrect: false },
        { Answer: 'Eagle', isCorrect: false },
        { Answer: 'Bat', isCorrect: true },
        { Answer: 'Platypus', isCorrect: false }
      ]
    },
    {
      Question: "World's highest mountain peak is?",
      Answers: [
        { Answer: 'Kanchenjunga', isCorrect: false },
        { Answer: 'K2', isCorrect: false },
        { Answer: 'Mt. Everest', isCorrect: true },
        { Answer: 'Kilimanjaro', isCorrect: false }
      ]
    },
    {
      Question: 'Who is the new CEO of Twitter?',
      Answers: [
        { Answer: 'Linda Yaccarino', isCorrect: true },
        { Answer: 'Elon Musk', isCorrect: false },
        { Answer: 'Tim Cook', isCorrect: false },
        { Answer: 'Parag Agarwal', isCorrect: false }
      ]
    },
    {
      Question: "What is Facebook's new name?",
      Answers: [
        { Answer: 'Alpha', isCorrect: false },
        { Answer: 'Meta', isCorrect: true },
        { Answer: 'Beta', isCorrect: false },
        { Answer: 'Delta', isCorrect: false }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <>
            Aggregate: {score}/{Questionbank.length}, Percentage:{' '}
            {((score / Questionbank.length) * 100).toFixed(2)}%
          </>
          <>
            <button type="submit" onClick={resetQuiz}>
              Play Again!!
            </button>
          </>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>{currentQuestion + 1}</span>/{Questionbank.length}
            </div>

            <div className="question-text">
              {Questionbank[currentQuestion].Question}
            </div>
          </div>

          <div className="answer-section">
            {Questionbank[currentQuestion].Answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerResponse(answer.isCorrect)}
              >
                {answer.Answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComp;
