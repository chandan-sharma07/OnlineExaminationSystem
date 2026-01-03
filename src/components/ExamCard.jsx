import React from 'react';
import { Clock, HelpCircle, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExamCard = ({ exam }) => {
    return (
        <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all"></div>

            <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    {exam.image ? (
                        <img src={exam.image} alt={exam.title} className="w-8 h-8 object-contain" />
                    ) : (
                        <Zap className="w-8 h-8 text-primary" />
                    )}
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${exam.level === 'Beginner' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                    exam.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                        'bg-purple-500/10 text-purple-400 border-purple-500/20'
                    }`}>
                    {exam.level}
                </span>
            </div>

            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                {exam.title}
            </h3>
            <p className="text-muted text-sm mb-6 line-clamp-2 leading-relaxed">
                {exam.description}
            </p>

            <div className="flex items-center justify-between text-sm text-muted mb-6 bg-white/5 p-3 rounded-xl">
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{exam.duration} mins</span>
                </div>
                <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-secondary" />
                    <span>{exam.questions} Qs</span>
                </div>
            </div>

            <Link
                to={`/exam/${exam.id}`}
                className="w-full btn btn-primary flex items-center justify-center gap-2 group-hover:translate-y-0"
            >
                Start Challenge
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
};

export default ExamCard;
