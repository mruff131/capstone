import React from 'react';
import './bubble.scss'; 

interface BubbleProps {
  className?: string;
}

function Bubble({ className }: BubbleProps) {
  const maxBubbles = 40;

  // Function to create an array of JSX elements representing checkboxes and labels
  const createBubbles = () => {
    const bubbles = [];
    for (let b = 0; b < maxBubbles; ++b) {
      bubbles.push(
        <React.Fragment key={`bubble-${b}`}>
          <input type="checkbox" id={`bubble${b + 1}`} />
          <label htmlFor={`bubble${b + 1}`} className={`bubble ${className}`}>
            <span className="bubble-inner">
              <span></span>
            </span>
          </label>
        </React.Fragment>
      );
    }
    return bubbles;
  };

  return (
    <form action="">
      {createBubbles()}
    </form>
  );
}

export default Bubble;
