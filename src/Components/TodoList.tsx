import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../Slice/todoSlice';
import { RootState } from '../Store/store'

function Todolist() {
    const tasks = useSelector((state: RootState) => state.todo.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' , paddingRight: '5px'}}> {task.text}</span>
                        <button onClick={() => dispatch(toggleTask(task.id))}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todolist;