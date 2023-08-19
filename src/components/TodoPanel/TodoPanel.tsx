import React, { useState } from 'react';

import styles from './TodoPanel.module.css';
import Button from '../Button/Button';

const DEFAULT_TODO = {
    name: '',
    desc: '',
};

type Todo = {
    id: number;
    name: string;
    desc: string;
    checked: boolean;
};

interface TodoPanelProps {
    addTodo: ({ name, desc }: Omit<Todo, 'checked' | 'id'>) => void;
}

const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
    const [todo, setTodo] = useState(DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const onClick = () => {
        addTodo({ name: todo.name, desc: todo.desc });
        setTodo(DEFAULT_TODO);
    };

    return (
        <div className={styles.todo_panel_container}>
            <div className={styles.fields_container}>
                <div className={styles.field_container}>
                    <label htmlFor="name">
                        <div>name</div>
                        <input
                            type="text"
                            id="name"
                            value={todo.name}
                            name="name"
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className={styles.field_container}>
                    <label htmlFor="name">
                        <div>description</div>
                        <input
                            type="text"
                            id="desc"
                            value={todo.desc}
                            name="desc"
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
            <div className={styles.button_container}>
                <Button color="blue" onClick={onClick}>
                    ADD
                </Button>
            </div>
        </div>
    );
};

export default TodoPanel;
