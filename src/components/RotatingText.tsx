'use client';

import { useState, useEffect } from 'react';

const words = ['nach Feierabend', 'in Stoßzeiten', 'vor der Öffnung', 'am Wochenende'];
const colors = ['from-primary via-accent to-primary', 'from-accent to-primary', 'from-primary to-accent', 'from-accent via-primary to-accent'];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setIsExiting(false);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative" style={{ minWidth: '400px', height: '1em', verticalAlign: 'baseline', display: 'inline-block' }}>
      <span
        key={`${index}-${isExiting ? 'exit' : 'enter'}`}
        className="whitespace-nowrap absolute left-1/2"
        style={{
          top: '63%',
          animationName: isExiting ? 'wordRotationExit' : 'wordRotationEnter',
          animationDuration: '0.6s',
          animationTimingFunction: 'ease-in-out',
          animationFillMode: 'forwards',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <style jsx>{`
          @keyframes wordRotationEnter {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) perspective(500px) rotateX(-90deg) translateY(20px);
              filter: blur(8px);
            }
            30% {
              opacity: 0.5;
            }
            60% {
              opacity: 1;
              filter: blur(2px);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) perspective(500px) rotateX(0deg) translateY(0);
              filter: blur(0px);
            }
          }

          @keyframes wordRotationExit {
            0% {
              opacity: 1;
              transform: translate(-50%, -50%) perspective(500px) rotateX(0deg) translateY(0);
              filter: blur(0px);
            }
            40% {
              opacity: 0.5;
              filter: blur(2px);
            }
            100% {
              opacity: 0;
              transform: translate(-50%, -50%) perspective(500px) rotateX(90deg) translateY(-20px);
              filter: blur(8px);
            }
          }
        `}</style>
        <span className={`bg-gradient-to-r ${colors[index]} bg-clip-text text-transparent`}>
          {words[index]}
        </span>
      </span>
    </span>
  );
}
