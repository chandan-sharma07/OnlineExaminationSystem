import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, XCircle, Home, RotateCcw, HelpCircle, Trophy, BarChart2 } from 'lucide-react';

const ResultPage = () => {
    const location = useLocation();
    const state = location.state;

    if (!state) {
        return <Navigate to="/" replace />;
    }

    const { score, total, correct, wrong, attempted, answers, questions } = state;
    const percentage = Math.round((score / total) * 100);
    const skipped = total - attempted;

    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>

                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#0f172a] border-4 border-white/5 mb-6 relative shadow-2xl">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#1e293b"
                            strokeWidth="2"
                        />
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={percentage >= 70 ? '#10b981' : percentage >= 40 ? '#f59e0b' : '#ef4444'}
                            strokeWidth="2"
                            strokeDasharray={`${percentage}, 100`}
                            className="transition-all duration-1000 ease-out drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-3xl font-bold text-white">{percentage}%</span>
                        <span className="text-[10px] text-muted uppercase tracking-widest">Score</span>
                    </div>
                </div>

                <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 ${percentage >= 40 ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                    {percentage >= 40 ? 'PASSED' : 'FAILED'}
                </div>

                <h1 className="text-4xl font-bold text-white mb-2">
                    {percentage >= 70 ? 'Outstanding Performance!' : percentage >= 40 ? 'Good Effort!' : 'Needs Improvement'}
                </h1>
                <p className="text-muted">
                    You successfully completed the assessment. Here is your detailed report.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border-t-2 border-t-primary/50">
                    <Trophy className="w-6 h-6 text-primary mb-3" />
                    <span className="text-3xl font-bold text-white mb-1">{score}/{total}</span>
                    <span className="text-xs text-muted uppercase tracking-wider">Total Score</span>
                </div>
                <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border-t-2 border-t-green-500/50">
                    <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
                    <span className="text-3xl font-bold text-white mb-1">{correct}</span>
                    <span className="text-xs text-muted uppercase tracking-wider">Correct</span>
                </div>
                <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border-t-2 border-t-red-500/50">
                    <XCircle className="w-6 h-6 text-red-500 mb-3" />
                    <span className="text-3xl font-bold text-white mb-1">{wrong}</span>
                    <span className="text-xs text-muted uppercase tracking-wider">Incorrect</span>
                </div>
                <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border-t-2 border-t-yellow-500/50">
                    <HelpCircle className="w-6 h-6 text-yellow-500 mb-3" />
                    <span className="text-3xl font-bold text-white mb-1">{skipped}</span>
                    <span className="text-xs text-muted uppercase tracking-wider">Skipped</span>
                </div>
            </div>

            {/* Detailed Analysis */}
            <div className="space-y-6 mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <BarChart2 className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-white">Question Analysis</h2>
                </div>

                {questions.map((q, index) => {
                    const userAnswer = answers[q.id];
                    const isCorrect = userAnswer === q.correctAnswer;
                    const isSkipped = userAnswer === undefined;

                    return (
                        <div key={q.id} className={`glass p-6 rounded-2xl border-l-4 transition-all hover:bg-white/5 ${isCorrect ? 'border-l-green-500' : isSkipped ? 'border-l-yellow-500' : 'border-l-red-500'
                            }`}>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-full bg-white/5">
                                    {isCorrect ? (
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    ) : isSkipped ? (
                                        <HelpCircle className="w-5 h-5 text-yellow-500" />
                                    ) : (
                                        <XCircle className="w-5 h-5 text-red-500" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-bold text-muted uppercase">Question {index + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-4">{q.text}</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className={`p-4 rounded-xl flex items-center justify-between ${isCorrect ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                            isSkipped ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                            }`}>
                                            <span className="font-medium">Your Answer: {isSkipped ? 'Skipped' : q.options[userAnswer]}</span>
                                            {isCorrect && <CheckCircle className="w-4 h-4" />}
                                        </div>
                                        {!isCorrect && (
                                            <div className="p-4 rounded-xl bg-white/5 text-muted border border-white/5 flex items-center justify-between">
                                                <span className="font-medium text-white">Correct Answer: <span className="text-green-400">{q.options[q.correctAnswer]}</span></span>
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center gap-4 pb-12">
                <Link to="/" className="btn btn-ghost px-8">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Dashboard
                </Link>
                <Link to="/" className="btn btn-primary px-8">
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Take Another Challenge
                </Link>
            </div>
        </div>
    );
};

export default ResultPage;
