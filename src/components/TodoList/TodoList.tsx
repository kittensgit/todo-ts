import React from 'react';
import { Todo } from '../../type';
import TodoItem from './TodoItem/TodoItem';

interface TodoListProps {
    todos: Todo[];
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    checkTodo,
    deleteTodo,
}) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    checkTodo={checkTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
