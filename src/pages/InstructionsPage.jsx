import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { exams } from '../data/mockData';
import { AlertCircle, CheckCircle, Clock, ArrowRight, Shield, Zap } from 'lucide-react';

const InstructionsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const exam = exams.find(e => e.id === parseInt(id));

    if (!exam) {
        return <div className="text-center py-20 text-muted">Exam not found</div>;
    }

    const startExam = () => {
        navigate(`/exam/${id}/start`);
    };

    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
                <Link to="/" className="text-muted hover:text-white mb-6 inline-flex items-center gap-2 transition-colors">
                    &larr; Back to Dashboard
                </Link>
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                        <img src={exam.image} alt={exam.title} className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-1">{exam.title}</h1>
                        <p className="text-primary font-medium">Instructions & Rules</p>
                    </div>
                </div>
            </div>

            <div className="glass rounded-3xl p-8 mb-8 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                <div className="grid md:grid-cols-3 gap-6 mb-8 relative z-10">
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                        <div className="p-2 bg-primary/20 w-fit rounded-lg text-primary mb-3">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-white mb-1">Time Limit</h3>
                        <p className="text-muted text-sm">
                            You have <span className="text-white font-bold">{exam.duration} minutes</span> to complete this challenge.
                        </p>
                    </div>

                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                        <div className="p-2 bg-green-500/20 w-fit rounded-lg text-green-500 mb-3">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-white mb-1">Scoring</h3>
                        <p className="text-muted text-sm">
                            Each question carries 1 mark. <span className="text-green-400">No negative marking</span>.
                        </p>
                    </div>

                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                        <div className="p-2 bg-yellow-500/20 w-fit rounded-lg text-yellow-500 mb-3">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-white mb-1">Integrity</h3>
                        <p className="text-muted text-sm">
                            Full screen mode recommended. Do not switch tabs.
                        </p>
                    </div>
                </div>

                <div className="space-y-4 relative z-10">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-primary" />
                        Important Guidelines
                    </h3>
                    <ul className="space-y-3 text-muted">
                        <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                            <span>Do not refresh the page, although we try to save your progress locally.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                            <span>The exam will auto-submit when the timer reaches zero.</span>
                        </li>
                        <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                            <span>Ensure you have a stable internet connection before starting.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center justify-between bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 text-sm text-muted">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>By clicking Start, you agree to the rules.</span>
                </div>
                <button onClick={startExam} className="btn btn-primary group px-8 py-4 text-lg">
                    Start Challenge
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default InstructionsPage;
