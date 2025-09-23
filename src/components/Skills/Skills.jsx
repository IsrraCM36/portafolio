import React, { useState, useEffect, useRef } from 'react';
import TerminalCard from './components/TerminalCard';
import { skillsData } from './data/skillsData';
import BlurText from '@components/BlurText/BlurText';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    // Intersection Observer para detectar cuando la sección es visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3, 
                rootMargin: '0px 0px -100px 0px' 
            }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);
 
    return (
        <div ref={skillsRef} className="w-full mt-20 max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8 text-center flex flex-col items-center">
                <BlurText
                    text="Habilidades Técnicas"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-4xl sm:text-4xl md:text-5xl font-bold mb-2 justify-center"
                />
                <BlurText
                    text="Tecnologías y herramientas que domino"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-xl justify-center"
                />
            </div>

            
            
            <div className="flex justify-center flex-wrap gap-5">
                {skillsData.map((category, index) => (
                    <TerminalCard 
                        key={index}
                        title={category.title}
                        skills={category.skills}
                        delay={index * 200} // Delay escalonado de 200ms entre cards
                        shouldAnimate={isVisible} // Solo anima cuando la sección es visible
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills
