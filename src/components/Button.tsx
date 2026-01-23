import React from 'react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonState = 'default' | 'disabled' | 'loading';

interface ButtonProps {
  variant: ButtonVariant;
  state?: ButtonState;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  testId?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant, 
  state = 'default', 
  children, 
  onClick,
  type = 'button',
  testId
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium border";
  
  const variantStyles = {
    primary: "bg-[var(--button-primary)] text-white border-[var(--button-primary)]",
    secondary: "bg-[var(--button-secondary)] text-[var(--text-primary)] border-[var(--border-color)]"
  };

  const stateStyles = {
    default: "cursor-pointer",
    disabled: "opacity-50 cursor-not-allowed",
    loading: "opacity-75 cursor-wait"
  };

  const isDisabled = state === 'disabled' || state === 'loading';

  return (
    <button
      type={type}
      data-testid={testId}
      className={`${baseStyles} ${variantStyles[variant]} ${stateStyles[state]}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {state === 'loading' ? (
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};
