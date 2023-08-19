import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import TodoPanel from './components/TodoPanel/TodoPanel';

type Todo = {
    id: number;
    name: string;
    desc: string;
    checked: boolean;
};

const DEFAULT_TODO_LIST = [
    { id: 1, name: 'Task 1', desc: 'desk 1', checked: false },
    { id: 1, name: 'Task 1', desc: 'desk 1', checked: false },
    {
        id: 1,
        name: 'Task 1',
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

    return (
        <div className={styles.app__container}>
            <div className={styles.container}>
                <Header todoCount={todos.length} />
                <TodoPanel addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App;
