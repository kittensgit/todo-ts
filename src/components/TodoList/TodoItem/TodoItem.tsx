import React from 'react';
import { Todo } from '../../../type';

import styles from './TodoItem.module.css';
import Button from '../../Button/Button';

interface TodoItemProps {
    todo: Todo;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo, deleteTodo }) => {
    return (
        <div className={styles.todo_item_container}>
            <div>
                <div
                    style={{
                        opacity: todo.checked ? 0.5 : 1,
                        textDecoration: todo.checked ? 'line-through' : 'none',
                    }}
                    className={styles.todo_item_title}
                    aria-hidden
                    onClick={() => checkTodo(todo.id)}
                >
                    {todo.name}
                </div>
                <div className={styles.todo_item_description} aria-hidden>
                    {todo.desc}
                </div>
            </div>
            <div className={styles.todo_item_button_container}>
                <Button color="orange">EDIT</Button>
                <Button color="red" onClick={() => deleteTodo(todo.id)}>
                    DELETE
                </Button>
            </div>
        </div>
    );
};

export default TodoItem;
