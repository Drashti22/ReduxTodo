import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface TodoState {
    tasks: Task[];
  }

  const initialState: TodoState = {
    tasks: [],
  };

export const todoSlice = createSlice(
    {
        name: "todo",
        initialState,
        reducers: {
            addTask: (state, action)=>{
                state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
            },
            toggleTask: (state,action)=>{
                const task = state.tasks.find(task => task.id == action.payload)
                if(task){
                    task.completed =! task.completed
                }
            },
            removeTask: (state, action)=>{
                state.tasks = state.tasks.filter(task => task.id !== action.payload);
            },
        }
    }
)

export const {addTask, toggleTask, removeTask} = todoSlice.actions;
export default todoSlice.reducer