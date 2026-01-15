import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold text-black hover:shadow-[0_0_20px_rgba(229,195,132,0.6)]",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-black",
    ghost: "text-gold hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
