import React from 'react';

export type CardState = 'default' | 'hover';

interface CardProps {
  state?: CardState;
  title?: string;
  content?: string;
  children?: React.ReactNode;
  testId?: string;
}

export const Card: React.FC<CardProps> = ({ 
  state = 'default',
  title,
  content,
  children,
  testId
}) => {
  const baseStyles = "p-6 rounded-lg border border-[var(--border-color)]";
  
  const stateStyles = {
    default: "bg-[var(--card-bg)]",
    hover: "bg-[var(--card-hover-bg)]"
  };

  return (
    <div 
      className={`${baseStyles} ${stateStyles[state]} ${state === 'hover' ? 'simulate-hover' : ''}`}
      data-testid={testId}
    >
      {title && (
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
          {title}
        </h3>
      )}
      {content && (
        <p className="text-[var(--text-secondary)]">
          {content}
        </p>
      )}
      {children}
    </div>
  );
};
