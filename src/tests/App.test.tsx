import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('should render the app title in h1', () => {
    render(<App />);
    const heading = screen.getByTestId('title');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/React Testing Demo$/);
    expect(heading.tagName).toBe('H1');
  });
});
