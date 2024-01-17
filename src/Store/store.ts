import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Slice/todoSlice'

 const store = configureStore({
    reducer: {
      todo: todoReducer,
    },
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = ReturnType<typeof store.dispatch>

  export default store;
