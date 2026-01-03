import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';

const Timer = ({ duration, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = React.useState(duration * 60);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, onTimeUp]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const isUrgent = timeLeft < 60;

    return (
        <div className={`glass flex items-center gap-3 font-mono text-lg font-bold px-5 py-2.5 rounded-xl border transition-all duration-300 ${isUrgent
                ? 'bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse'
                : 'bg-primary/5 text-primary border-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]'
            }`}>
            <Clock className={`w-5 h-5 ${isUrgent ? 'animate-bounce' : ''}`} />
            <span className="tracking-widest">{formatTime(timeLeft)}</span>
        </div>
    );
};

export default Timer;
