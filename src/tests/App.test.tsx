import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('should render the app title in h1', () => {
    render(<App />);
    const heading = screen.getByTestId('title');

    // https://stackoverflow.com/questions/56547215/react-testing-library-why-is-tobeinthedocument-not-a-function
    // https://www.jetbrains.com/help/idea/typescript-compiler-tool-window.html#ws_ts_typescript_widget
    // To resolve "Unresolved function or method toBeInTheDocument()" error
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/React Testing Demo$/);
    expect(heading.tagName).toBe('H1');
  });
});
