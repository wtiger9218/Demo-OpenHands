import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
describe('Todo App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders TODO List heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/TODO List/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('adds a task without due date', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add Task/i);

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('adds a task with due date', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const dateInput = screen.getAllByDisplayValue('')[1]; // Get the date input
    const addButton = screen.getByText(/Add Task/i);

    fireEvent.change(input, { target: { value: 'Task with Date' } });
    fireEvent.change(dateInput, { target: { value: '2024-01-20' } });
    fireEvent.click(addButton);

    const taskText = screen.getByTestId('task-text');
    expect(taskText).toHaveTextContent('Task with Date');
    expect(screen.getByText(/Due:/)).toBeInTheDocument();
  });

  test('removes a task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add Task/i);

    fireEvent.change(input, { target: { value: 'Task to Remove' } });
    fireEvent.click(addButton);

    const removeButton = screen.getByRole('button', { name: /Remove/i });
    fireEvent.click(removeButton);

    expect(screen.queryByText('Task to Remove')).not.toBeInTheDocument();
  });
  expect(linkElement).toBeInTheDocument();
});
