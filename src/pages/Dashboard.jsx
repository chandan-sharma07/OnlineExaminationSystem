import React from 'react';
import { exams } from '../data/mockData';
import ExamCard from '../components/ExamCard';
import { Sparkles } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="animate-fade-in pt-12">
            <div className="mb-12 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>

                {/* Welcome Message Removed */}

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                    Master Your Skills
                </h1>
                <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                    Select a challenge below to test your knowledge. Level up your career with our premium assessment platform.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exams.map((exam, index) => (
                    <div key={exam.id} className={`animate-fade-in delay-${(index + 1) * 100}`}>
                        <ExamCard exam={exam} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
