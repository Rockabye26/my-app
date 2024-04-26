import React, { useState } from 'react';
import './QuizPage.css'; // Import the CSS

const QuizPage = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What is the formula for calculating the area of a square?",
      options: ["Length * Width", "Length * Length", "2 * (Length + Width)", "1/2 * Length * Width"],
      correctAnswer: "Length * Length"
    },
    {
      question: "What is the formula for calculating the area of a triangle?",
      options: ["Length * Width", "Length * Length", "1/2 * Base * Height", "π * r * r"],
      correctAnswer: "1/2 * Base * Height"
    },
    {
      question: "What is the perimeter of a circle?",
      options: ["Radius ^ 2", "Diamater * π", "1/2 * radius * π", "2 * π * radius"],
      correctAnswer: "2 * π * radius"
    },
    {
      question: "Which of these real-life objects does not portray a circle when still/in motion?",
      options: ["Wheel", "Fan", "Compass", "Car"],
      correctAnswer: "Car"
    },
    {
      question: "How many sides does a pentagon have",
      options: ["5","7","6","Infinity"],
      correctAnswer:"5"
    },
    {
      question: "What is the name of a four-sided polygon with opposite sides parallel and equal in length?",
      options: ["Trapezium", "Rectangle", "Rhombus", "Square"],
      correctAnswer: "Rhombus"
    },
    {
      question: "How many diagonals does a hexagon have?",
      options: ["10","9","5","6"],
      correctAnswer:"9"
    },{
      question: "What is the sum of interior angles of a quadrilateral(in degrees) ?",
      options: ["360","270","540","90"],
      correctAnswer: "360"
    },
    // Add more questions here
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz is finished
      // You can redirect to another page or show a completion message
      alert('Quiz Completed! Refresh to attempt again.');
    }
  };

  return (
    <>
    <header class="header">
        <h1 class="logo">
            <a href="Landing Page.html"><img src="geogoo.png" height="50vh" class="log" /></a>
        </h1>
        <ul class="main-nav">
            <li><a href="Home Page.html">Home</a></li>
            <li><a href="Sign In form.html">Sign in</a></li>
            <li><a href="Sign Up Form.html">Sign Up</a></li>
            <li><a href="Registration Form.html">Register</a></li>
            <li><a href="QuizPage.js">Quiz</a></li>
            <li><a href="FeedbackForm.html">Feedback</a></li>
        </ul>
    </header>
    <div className="quiz-container">
      <h1><u>Geometric Shapes Quiz</u></h1>
      <div className="quiz-question">
        {questions[currentQuestion].question}
      </div>
      <ul className="quiz-options">
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
      <div className="score">
        Score: {score}
      </div>
    </div>
    </>
  );
};

export default QuizPage;
