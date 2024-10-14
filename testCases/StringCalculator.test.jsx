import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import StringCalculator from '../src/components/StringCalculator.jsx';
 
test('should return 0 for an empty string', () => {
  render(<StringCalculator />);
  const textarea = screen.getByPlaceholderText(/Examples/i);
    fireEvent.change(textarea, { target: { value: '' } });
 
    const button = screen.getByText(/Calculate Sum/i);
    fireEvent.click(button);
 
   expect(screen.getByText(/Result: 0/i)).toBeInTheDocument();
});
 
test("calculates the sum of the input numbers", () => {
    render(<StringCalculator />);
 
    const textarea = screen.getByPlaceholderText(/Examples/i);
    fireEvent.change(textarea, { target: { value: '1,2,3' } });
 
    const button = screen.getByText(/Calculate Sum/i);
    fireEvent.click(button);
 
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
});
 
test("should return the number itself when only one number is provided", () => {
  render(<StringCalculator />);
  const textarea = screen.getByPlaceholderText(/Examples/i);
  fireEvent.change(textarea, { target: { value: '1' } });
 
  const button = screen.getByText(/Calculate Sum/i);
  fireEvent.click(button);
 
  expect(screen.getByText(/Result: 1/i)).toBeInTheDocument();
});
 
test("should return the number itself when only one number is provided", () => {
  render(<StringCalculator />);
 
  const textarea = screen.getByPlaceholderText(/Examples/i);
  fireEvent.change(textarea, { target: { value: '5' } });
 
  const button = screen.getByText(/Calculate Sum/i);
  fireEvent.click(button);
 
  expect(screen.getByText(/Result: 5/i)).toBeInTheDocument();
});
 
test("should return the sum of two numbers", () => {
  render(<StringCalculator />);
  const textarea = screen.getByPlaceholderText(/Examples/i);
  fireEvent.change(textarea, { target: { value: '1,2' } });
 
  const button = screen.getByText(/Calculate Sum/i);
  fireEvent.click(button);
 
  expect(screen.getByText(/Result: 3/i)).toBeInTheDocument();
});
 
test("should return the sum of two numbers", () => {
  render(<StringCalculator />);
  const textarea = screen.getByPlaceholderText(/Examples/i);
  fireEvent.change(textarea, { target: { value: '1,5' } });
 
  const button = screen.getByText(/Calculate Sum/i);
  fireEvent.click(button);
 
  expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
});
 
test("should return the sum of an unknown number of numbers", () => {
  render(<StringCalculator />);
  const textarea = screen.getByPlaceholderText(/Examples/i);
  fireEvent.change(textarea, { target: { value: '1,2,3,4' } });
 
  const button = screen.getByText(/Calculate Sum/i);
  fireEvent.click(button);
 
  expect(screen.getByText(/Result: 10/i)).toBeInTheDocument();
});
 
test("should ignore numbers larger than 1000", () => {
  render(<StringCalculator />);
  const textarea = screen.getByPlaceholderText(/Examples/i);
  fireEvent.change(textarea, { target: { value: '1000,999' } });
 
  const button = screen.getByText(/Calculate Sum/i);
  fireEvent.click(button);
 
  expect(screen.getByText(/Result: 1999/i)).toBeInTheDocument();
});
 
test("should throw an error when a negative number is provided", () => {
  render(<StringCalculator />);
  const textarea = screen.getByPlaceholderText(/Examples/i);
  fireEvent.change(textarea, { target: { value: '1,-2' } });
 
  const button = screen.getByText(/Calculate Sum/i);
  fireEvent.click(button);
  expect(screen.queryByText(/Result:/)).not.toBeInTheDocument();
});

 
test("should throw an error when a negative number is provided", () => {
  render(<StringCalculator />);
  const textarea = screen.getByPlaceholderText(/Examples/i);
  fireEvent.change(textarea, { target: { value: '2,-3,4,-5' } });
 
  const button = screen.getByText(/Calculate Sum/i);
  fireEvent.click(button);
  expect(screen.queryByText(/Result:/)).not.toBeInTheDocument();
});
 
 
// THIS TEST CASES ARE NOT IMPEMENTED YET
// test("should return the sum of an unknown number of numbers", () => {
//   render(<StringCalculator />);
//   const textarea = screen.getByPlaceholderText(/Examples/i);
//   fireEvent.change(textarea, { target: { value: '1\n2,3' } });
 
//   const button = screen.getByText(/Calculate Sum/i);
//   fireEvent.click(button);
 
//   expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
// });
 
 
// test("should handle different delimiters specified at the beginning", () => {
//   render(<StringCalculator />);
//   const textarea = screen.getByPlaceholderText(/Examples/i);
//   fireEvent.change(textarea, { target: { value: '//;\n1;2' } });
 
//   const button = screen.getByText(/Calculate Sum/i);
//   fireEvent.click(button);
 
//   expect(screen.getByText(/Result: 3/i)).toBeInTheDocument();
// });
 
 
// test("should handle different delimiters specified at the beginning", () => {
//   render(<StringCalculator />);
//   const textarea = screen.getByPlaceholderText(/Examples/i);
//   fireEvent.change(textarea, { target: { value: '//|\n2|3|4' } });
 
//   const button = screen.getByText(/Calculate Sum/i);
//   fireEvent.click(button);
 
//   expect(screen.getByText(/Result: 9/i)).toBeInTheDocument();
// });
 
// test("should ignore numbers larger than 1000", () => {
//   render(<StringCalculator />);
//   const textarea = screen.getByPlaceholderText(/Examples/i);
//   fireEvent.change(textarea, { target: { value: '2,1001' } });
 
//   const button = screen.getByText(/Calculate Sum/i);
//   fireEvent.click(button);
 
//   expect(screen.getByText(/Result: 2/i)).toBeInTheDocument();
// });
 
 
// test("should ignore numbers larger than 1000", () => {
//   render(<StringCalculator />);
//   const textarea = screen.getByPlaceholderText(/Examples/i);
//   fireEvent.change(textarea, { target: { value: '//***\n1***2***3' } });
 
//   const button = screen.getByText(/Calculate Sum/i);
//   fireEvent.click(button);
 
//   expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
// });
 

