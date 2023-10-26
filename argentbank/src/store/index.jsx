import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from '../slice'; 

const store = configureStore({
  reducer: {
    user: userSliceReducer,  
  },
});

export default store;