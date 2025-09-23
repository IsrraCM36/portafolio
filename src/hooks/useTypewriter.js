import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 80, shouldStart = false) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!shouldStart) {
            // Reset when animation should stop
            setDisplayText('');
            setCurrentIndex(0);
            return;
        }

        if (shouldStart && currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed, shouldStart]);

    return displayText;
};

export default useTypewriter;
