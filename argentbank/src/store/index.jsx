import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from '../slice'; 

const store = configureStore({
  reducer: {
    //userSlice en reducteur
    user: userSliceReducer,  
  },
});

export default store;