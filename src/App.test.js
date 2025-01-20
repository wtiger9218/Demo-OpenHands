import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('renders TODO List heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/TODO List/i);
  expect(headingElement).toBeInTheDocument();
});

test('can add a task without due date', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(input, { target: { value: 'Test task' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Test task')).toBeInTheDocument();
});

test('can add a task with due date', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Add a new task/i);
  const dateInput = screen.getByTestId('date-input');
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(input, { target: { value: 'Test task with date' } });
  fireEvent.change(dateInput, { target: { value: '2024-12-31' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Test task with date')).toBeInTheDocument();
  expect(screen.getByText(/Due:/)).toBeInTheDocument();
});

test('can add a task with details', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Add a new task/i);
  const detailsInput = screen.getByTestId('details-input');
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(input, { target: { value: 'Test task with details' } });
  fireEvent.change(detailsInput, { target: { value: 'These are the task details' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Test task with details')).toBeInTheDocument();
  expect(screen.getByText('These are the task details')).toBeInTheDocument();
});

test('can remove a task', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(input, { target: { value: 'Task to remove' } });
  fireEvent.click(addButton);

  const removeButton = screen.getByTestId('remove-0');
  fireEvent.click(removeButton);

  expect(screen.queryByText('Task to remove')).not.toBeInTheDocument();
});
