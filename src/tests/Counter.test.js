// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
let counterElement, incrementButton, decrementButton;

beforeEach(() => {
  render(<Counter />);
  counterElement = screen.getByTestId('count');
  incrementButton = screen.getByText('+');
  decrementButton = screen.getByText('-');
})

test('renders counter message', () => {
  expect(screen.getByRole('heading', { name: 'Counter' })).toBeInTheDocument();
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(counterElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  fireEvent.click(incrementButton);
  expect(counterElement).toHaveTextContent('1');
  fireEvent.click(incrementButton);
  expect(counterElement).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  expect(counterElement).toHaveTextContent('1');
});
