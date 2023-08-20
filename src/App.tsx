import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import TodoPanel from './components/TodoPanel/TodoPanel';
import { Todo } from './type';
import TodoList from './components/TodoList/TodoList';

const DEFAULT_TODO_LIST = [
    { id: 1, name: 'Task 1', desc: 'desc 1', checked: false },
    { id: 2, name: 'Task 2', desc: 'desc 1', checked: false },
    {
        id: 3,
        name: 'Task 3',
        desc: 'Labore mollit adipisicing laboris proident sit fugiat laborum sit. Nisi ex deserunt tempor proident elit dolore reprehenderit incididunt eu anim ea laboris adipisicing. Commodo aliquip ut sint occaecat nisi culpa excepteur reprehenderit esse exercitation.',
        checked: true,
    },
];

function App() {
    const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

    const addTodo = ({ name, desc }: Omit<Todo, 'checked' | 'id'>) => {
        setTodos([
            ...todos,
            { id: todos[todos.length - 1].id + 1, desc, name, checked: false },
        ]);
    };

    const checkTodo = (id: Todo['id']) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, checked: !todo.checked };
                }
                return todo;
            })
        );
    };

    return (
        <div className={styles.app__container}>
            <div className={styles.container}>
                <Header todoCount={todos.length} />
                <TodoPanel addTodo={addTodo} />
                <TodoList todos={todos} checkTodo={checkTodo} />
            </div>
        </div>
    );
}

export default App;
