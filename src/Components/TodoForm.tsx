import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Slice/todoSlice';

function TodoForm(){
    const [task, setTask] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim() !== '') {
          dispatch(addTask(task));
          setTask('');
        }
      };
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
          <button type="submit">Add Task</button>
        </form>
      );
}

export default TodoForm;