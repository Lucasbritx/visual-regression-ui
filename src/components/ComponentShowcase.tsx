import React from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Card } from './Card';

export const ComponentShowcase: React.FC = () => {
  return (
    <div className="w-full" data-testid="component-showcase">
      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
        Design System Components
      </h2>

      {/* Buttons Section */}
      <section className="mb-8" data-testid="buttons-section">
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
          Buttons
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border border-[var(--border-color)] rounded-lg" data-testid="button-primary">
            <p className="text-sm text-[var(--text-secondary)] mb-2">Primary</p>
            <Button variant="primary" testId="button-primary-default">
              Primary Button
            </Button>
          </div>
          
          <div className="p-4 border border-[var(--border-color)] rounded-lg" data-testid="button-secondary">
            <p className="text-sm text-[var(--text-secondary)] mb-2">Secondary</p>
            <Button variant="secondary" testId="button-secondary-default">
              Secondary Button
            </Button>
          </div>
          
          <div className="p-4 border border-[var(--border-color)] rounded-lg" data-testid="button-disabled">
            <p className="text-sm text-[var(--text-secondary)] mb-2">Disabled</p>
            <Button variant="primary" state="disabled" testId="button-primary-disabled">
              Disabled Button
            </Button>
          </div>
          
          <div className="p-4 border border-[var(--border-color)] rounded-lg" data-testid="button-loading">
            <p className="text-sm text-[var(--text-secondary)] mb-2">Loading</p>
            <Button variant="primary" state="loading" testId="button-primary-loading">
              Loading Button
            </Button>
          </div>
        </div>
      </section>

      {/* Inputs Section */}
      <section className="mb-8" data-testid="inputs-section">
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
          Inputs
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-[var(--border-color)] rounded-lg" data-testid="input-default">
            <p className="text-sm text-[var(--text-secondary)] mb-2">Default</p>
            <Input 
              state="default" 
              placeholder="Default input" 
              testId="input-default-state"
            />
          </div>
          
          <div className="p-4 border border-[var(--border-color)] rounded-lg" data-testid="input-focused">
            <p className="text-sm text-[var(--text-secondary)] mb-2">Focused</p>
            <Input 
              state="focused" 
              placeholder="Focused input" 
              testId="input-focused-state"
            />
          </div>
          
          <div className="p-4 border border-[var(--border-color)] rounded-lg" data-testid="input-error">
            <p className="text-sm text-[var(--text-secondary)] mb-2">Error</p>
            <Input 
              state="error" 
              placeholder="Error input" 
              errorMessage="This field has an error"
              testId="input-error-state"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mb-8" data-testid="cards-section">
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
          Cards
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card 
            state="default"
            title="Default Card"
            content="This is a default card state for visual regression testing."
            testId="card-default"
          />
          
          <Card 
            state="hover"
            title="Hover Card"
            content="This card simulates the hover state using a CSS class for testing."
            testId="card-hover"
          />
        </div>
      </section>
    </div>
  );
};
