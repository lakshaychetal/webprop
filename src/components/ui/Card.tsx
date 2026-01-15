import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden transition-colors ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;