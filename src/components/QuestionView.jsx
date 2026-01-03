import React from 'react';

const QuestionView = ({ question, selectedAnswer, onSelectAnswer }) => {
    return (
        <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

            <div className="mb-8">
                <span className="text-sm font-medium text-primary mb-2 block uppercase tracking-wider">
                    Question {question.id}
                </span>
                <h2 className="text-2xl font-bold text-white leading-relaxed">
                    {question.text}
                </h2>
            </div>

            <div className="space-y-4">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onSelectAnswer(index)}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 group relative overflow-hidden ${selectedAnswer === index
                                ? 'bg-primary/10 border-primary/50 text-white shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                                : 'bg-white/5 border-white/5 text-muted hover:bg-white/10 hover:border-white/10 hover:text-white'
                            }`}
                    >
                        <div className="flex items-center gap-4 relative z-10">
                            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm font-bold transition-all duration-300 ${selectedAnswer === index
                                    ? 'bg-primary border-primary text-white scale-110'
                                    : 'border-white/20 text-muted group-hover:border-white/40'
                                }`}>
                                {String.fromCharCode(65 + index)}
                            </div>
                            <span className="text-lg">{option}</span>
                        </div>

                        {/* Selection Indicator */}
                        {selectedAnswer === index && (
                            <div className="absolute right-0 top-0 h-full w-1 bg-primary"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionView;
