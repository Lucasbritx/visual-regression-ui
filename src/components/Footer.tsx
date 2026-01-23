import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="w-full bg-[var(--bg-secondary)] border-t border-[var(--border-color)] px-4 sm:px-6 lg:px-8 mt-auto"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div data-testid="footer-section-1">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Section 1</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Footer content for visual regression testing.
            </p>
          </div>
          <div data-testid="footer-section-2">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Section 2</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Consistent layout across breakpoints.
            </p>
          </div>
          <div data-testid="footer-section-3">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Section 3</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Predictable and testable design.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
