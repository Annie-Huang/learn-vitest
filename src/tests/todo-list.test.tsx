import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { TodoList } from '../components/todo-list';

describe('Todo list Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  it('should render the todo list with initial empty state', () => {
    const todoList = screen.getByTestId('todo-list');
    expect(todoList).toBeInTheDocument();
    expect(todoList.children).toHaveLength(0);
  });

  it('should add a new todo when input is filled and add button is clicked', async () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);

    await waitFor(() => {
      const todoList = screen.getByTestId('todo-list');
      expect(todoList.children).toHaveLength(1);

      const todoItem = screen.getByText('New Todo Item');
      expect(todoItem).toBeInTheDocument();
      expect(input).toHaveValue('');
    });
  });
});
