import React, { useState } from 'react';
import styles from './App.module.css';

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
    return (
        <div className={styles.app__container}>
            <div className={styles.container}>Todo</div>
        </div>
    );
}

export default App;
