import React from 'react';
import { Todo } from '../../type';
import TodoItem from './TodoItem/TodoItem';

interface TodoListProps {
    todos: Todo[];
    checkTodo: (id: Todo['id']) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, checkTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} />
            ))}
        </div>
    );
};

export default TodoList;
