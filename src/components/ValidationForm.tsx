import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export const ValidationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email format';
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return undefined;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, email: value }));
    if (touched.email || submitted) {
      setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, password: value }));
    if (touched.password || submitted) {
      setErrors(prev => ({ ...prev, password: validatePassword(value) }));
    }
  };

  const handleEmailBlur = () => {
    setTouched(prev => ({ ...prev, email: true }));
    setErrors(prev => ({ ...prev, email: validateEmail(formData.email) }));
  };

  const handlePasswordBlur = () => {
    setTouched(prev => ({ ...prev, password: true }));
    setErrors(prev => ({ ...prev, password: validatePassword(formData.password) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    setErrors({
      email: emailError,
      password: passwordError
    });

    if (!emailError && !passwordError) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  const getInputState = (field: 'email' | 'password') => {
    if (errors[field]) return 'error';
    return 'default';
  };

  return (
    <div className="w-full max-w-md" data-testid="validation-form">
      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
        Form Validation Demo
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          testId="form-email"
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          state={getInputState('email')}
          errorMessage={errors.email}
        />

        <Input
          testId="form-password"
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          state={getInputState('password')}
          errorMessage={errors.password}
        />

        <Button
          testId="form-submit"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>

      {isSuccess && (
        <div 
          className="mt-4 p-4 bg-[var(--success)] bg-opacity-10 border border-[var(--success)] rounded-md"
          data-testid="form-success"
        >
          <p className="text-[var(--success)] font-medium">
            Form submitted successfully!
          </p>
        </div>
      )}
    </div>
  );
};
