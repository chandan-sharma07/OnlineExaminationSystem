import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { exams, questions } from '../data/mockData';
import Timer from '../components/Timer';
import QuestionView from '../components/QuestionView';
import { ChevronLeft, ChevronRight, CheckCircle, AlertTriangle } from 'lucide-react';

const ExamPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const exam = exams.find(e => e.id === parseInt(id));
    const examQuestions = questions[id] || [];

    const STORAGE_KEY_ANSWERS = `exam_${id}_answers`;
    const STORAGE_KEY_TIMER = `exam_${id}_timer`;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY_ANSWERS);
        return saved ? JSON.parse(saved) : {};
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getInitialTime = () => {
        const savedTime = localStorage.getItem(STORAGE_KEY_TIMER);
        return savedTime ? parseInt(savedTime) : exam.duration * 60;
    };

    const [timeLeft, setTimeLeft] = useState(getInitialTime);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                alert("WARNING: You switched tabs! This is recorded. Please stay on the exam page.");
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = prev - 1;
                localStorage.setItem(STORAGE_KEY_TIMER, newTime.toString());
                if (newTime <= 0) {
                    clearInterval(timerId);
                    handleSubmit();
                    return 0;
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    if (!exam) return <div className="text-center py-20 text-muted">Exam not found</div>;
    if (examQuestions.length === 0) return <div className="text-center py-20 text-muted">No questions available</div>;

    const currentQuestion = examQuestions[currentQuestionIndex];

    const handleAnswerSelect = (optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: optionIndex
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < examQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleSubmit = () => {
        if (isSubmitting) return;
        setIsSubmitting(true);

        let score = 0;
        let attempted = 0;
        let correct = 0;
        let wrong = 0;

        examQuestions.forEach((q) => {
            const userAnswer = answers[q.id];
            if (userAnswer !== undefined) {
                attempted++;
                if (userAnswer === q.correctAnswer) {
                    score++;
                    correct++;
                } else {
                    wrong++;
                }
            }
        });

        localStorage.removeItem(STORAGE_KEY_ANSWERS);
        localStorage.removeItem(STORAGE_KEY_TIMER);

        navigate('/result', {
            state: {
                examId: exam.id,
                score,
                total: examQuestions.length,
                attempted,
                correct,
                wrong,
                answers,
                questions: examQuestions
            }
        });
    };

    const progress = ((currentQuestionIndex + 1) / examQuestions.length) * 100;

    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="grid grid-cols-3 items-center mb-8 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md sticky top-24 z-40">
                {/* Left: Exam Name */}
                <div className="justify-self-start">
                    <h1 className="text-lg font-bold text-white mb-0.5">{exam.title}</h1>
                    <div className="flex items-center gap-2 text-xs text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Live Session
                    </div>
                </div>

                {/* Center: Timer */}
                <div className="justify-self-center">
                    <Timer duration={exam.duration} onTimeUp={handleSubmit} />
                </div>

                {/* Right: Student & Logout */}
                <div className="justify-self-end flex items-center gap-4">
                    <span className="text-sm font-medium text-white hidden md:block">Student Candidate</span>
                    <button
                        onClick={() => {
                            if (window.confirm('Are you sure you want to quit the exam? Progress will be lost.')) {
                                navigate('/');
                            }
                        }}
                        className="btn btn-ghost btn-sm text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                        Quit Exam
                    </button>
                </div>
            </div>

            <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-muted mb-2">
                    <span>Question {currentQuestionIndex + 1} of {examQuestions.length}</span>
                    <span>{Math.round(progress)}% Completed</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="mb-8">
                <QuestionView
                    question={currentQuestion}
                    selectedAnswer={answers[currentQuestion.id]}
                    onSelectAnswer={handleAnswerSelect}
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className={`btn btn-ghost ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Previous
                </button>

                {currentQuestionIndex === examQuestions.length - 1 ? (
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn btn-primary px-8"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
                        {!isSubmitting && <CheckCircle className="w-5 h-5 ml-2" />}
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="btn bg-white/10 hover:bg-white/20 text-white border border-white/5"
                    >
                        Next Question
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ExamPage;
