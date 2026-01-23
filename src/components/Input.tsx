import React from 'react';

export type InputState = 'default' | 'focused' | 'error';

interface InputProps {
  state?: InputState;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: string;
  label?: string;
  errorMessage?: string;
  testId?: string;
  name?: string;
}

export const Input: React.FC<InputProps> = ({ 
  state = 'default',
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  type = 'text',
  label,
  errorMessage,
  testId,
  name
}) => {
  const baseStyles = "w-full px-3 py-2 rounded-md border bg-[var(--input-bg)] text-[var(--text-primary)]";
  
  const stateStyles = {
    default: "border-[var(--border-color)]",
    focused: "border-[var(--button-primary)] ring-2 ring-[var(--button-primary)] ring-opacity-20",
    error: "border-[var(--error)]"
  };

  return (
    <div className="w-full" data-testid={testId}>
      {label && (
        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${baseStyles} ${stateStyles[state]}`}
        data-testid={testId ? `${testId}-input` : undefined}
      />
      {state === 'error' && errorMessage && (
        <p className="mt-1 text-sm text-[var(--error)]" data-testid={testId ? `${testId}-error` : undefined}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};
