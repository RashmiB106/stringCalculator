import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../src/components/StringCalculator.jsx';
import { add } from '../src/utils/stringCalculator.js';

jest.mock('../src/utils/stringCalculator');

describe('StringCalculator', () => {
  beforeEach(() => {
    add.mockClear();
  });

  test('calculates the sum of the input numbers', () => {
    add.mockReturnValue(6);
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText(/Examples/i);
    fireEvent.change(textarea, { target: { value: '1,2,3' } });

    const button = screen.getByText(/Calculate Sum/i);
    fireEvent.click(button);

    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
  });

  // Additional tests can go here
});

