import React, { useState, useEffect } from 'react';  // Added useEffect importimport 
import k from '../assets/h.webp';
import l from '../assets/l.jpg';
import hj from '../assets/no.png'


// Sample session data
const sessions = [
    {
        date: '2024-12-10', // Date formatted as yyyy-mm-dd
        subject: 'Math',
        time: '10:00 AM',
        notes: 'Session on Algebra and Equations.'
    },
    {
        date: '2024-12-12',
        subject: 'Science',
        time: '2:00 PM',
        notes: 'Physics: Force and Motion discussion.'
    },
    {
        date: '2024-12-15',
        subject: 'English',
        time: '9:00 AM',
        notes: 'Literature: Shakespeare analysis.'
    },
];

// Progress Widget
const ProgressWidget = () => {
    const [progress, setProgress] = useState(70); // Example progress percentage

    return (
        <div className="bg-white p- rounded-lg shadow-lg w-full max-w-md mx-auto mt-4" id="progress"
        style={{ backgroundImage: `url(${hj})` }}

        >
            <h3 className="text-xl font-semibold text-center mb-4">Progress Tracker</h3>
            <div className="w-full h-5 bg-gray-200 rounded-full">
                <div
                    className="h-full rounded-full"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: progress >= 80 ? 'green' : 'orange',
                    }}
                ></div>
            </div>
            <p className="text-center mt-2">{progress}% Completed</p>
        </div>
    );
};

const HotQuestionsWidget = () => {
    const questions = [
        {
            id: 1,
            question: "What is the capital of France?",
            price: 10,
            difficulty: "Easy",
        },
        {
            id: 2,
            question: "Solve: 2x + 3 = 7",
            price: 15,
            difficulty: "Medium",
        },
        {
            id: 3,
            question: "Who wrote '1984'?",
            price: 20,
            difficulty: "Hard",
        },
    ];

    // State to track the current question index for the slideshow
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answeringQuestion, setAnsweringQuestion] = useState(null);
    const [answer, setAnswer] = useState("");

    // Change question every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
        }, 5000); // Change question every 5 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [questions.length]);

    const handleAnswerClick = (questionId) => {
        setAnsweringQuestion(questionId);
    };

    const handleAnswerSubmit = () => {
        alert(`You submitted: "${answer}" for question ${answeringQuestion}`);
        setAnsweringQuestion(null); // Close the answer card after submission
        setAnswer(""); // Clear the answer input
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    const handlePrevQuestion = () => {
        setCurrentQuestionIndex((prevIndex) =>
            prevIndex === 0 ? questions.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto min-h-screen bg-cover bg-center py-8" style={{ backgroundImage: `url(${k})`  }}>
            <h3 className="text-xl font-semibold text-center mb-4">Hot Questions</h3>
            <div className="space-y-4">
                {/* Display the current question */}
                <div className="p-4 border border-gray-300 rounded-lg bg-gray-100">
                    <div className="flex justify-between items-center">
                        <span className="text-md font-medium">{questions[currentQuestionIndex].question}</span>
                        <span className="text-lg font-semibold text-blue-600">${questions[currentQuestionIndex].price}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-blue-500">
                            Difficulty: {questions[currentQuestionIndex].difficulty}
                        </span>
                        <button
                            onClick={() => handleAnswerClick(questions[currentQuestionIndex].id)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Answer
                        </button>
                    </div>

                    {/* Answer Card (shown when user clicks 'Answer') */}
                    {answeringQuestion === questions[currentQuestionIndex].id && (
                        <div className="mt-4 p-4 bg-white border border-gray-300 rounded-lg">
                            <h4 className="text-lg font-semibold">Your Answer</h4>
                            <textarea
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                                placeholder="Type your answer here"
                            />
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={handleAnswerSubmit}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                >
                                    Submit Answer
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePrevQuestion}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextQuestion}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

// Upcoming Sessions Widget
const UpcomingSessionsWidget = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-4" id="upcoming-sessions">
            <h3 className="text-xl font-semibold text-center mb-4">Upcoming Sessions</h3>
            <ul className="space-y-4">
                {sessions.map((session, index) => (
                    <li key={index} className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
                        <div>
                            <p className="font-semibold">{session.subject}</p>
                            <p className="text-sm">{session.date} at {session.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Button Widget
const ButtonWidget = () => {
    const [showProgress, setShowProgress] = useState(false); // State to toggle ProgressWidget

    const handleGoToProgress = () => {
        setShowProgress(!showProgress); // Toggle visibility of ProgressWidget
    };

    return (
        <div className="flex justify-center gap-8 mb-8">
            <button
                onClick={handleGoToProgress}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                {showProgress ? 'Hide Progress' : 'Go to Progress'}
            </button>
            {showProgress && <ProgressWidget />} {/* Render ProgressWidget when state is true */}
            <button
                onClick={() => document.getElementById('upcoming-sessions').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Go to Upcoming Sessions
            </button>
        </div>
    );
};

// User Dashboard Component
const UserDashBoard = () => {
    return (
        <div className="min-h-screen bg-cover bg-center py-8"
        style={{ backgroundImage: `url(${l})` }}>

            <h1 className="text-3xl font-semibold text-center mb-8">Welcome to Your Dashboard</h1>

            {/* Button Widget */}
            <ButtonWidget />

            {/* Upcoming Sessions Widget */}
            <UpcomingSessionsWidget />

            {/* Hot Questions Widget */}
            <HotQuestionsWidget />

            {/* Navigation Links */}
            <div className="mt-8 text-center">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <a href="/userhome" className="text-lg text-black-600 hover:text-blue-800"> Home </a>
                    </li>
                    <li>
                        <a href="/my-courses" className="text-lg text-black-600 hover:text-blue-800">My Courses</a>
                    </li>
                    <li>
                        <a href="/my-questions" className="text-lg text-black-600 hover:text-blue-800">My Questions</a>
                    </li>
                    <li>
                        <a href="/request-tutor" className="text-lg text-black-600 hover:text-blue-800">Request Tutor</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserDashBoard;
