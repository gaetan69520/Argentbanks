import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null, // Ajoute un état pour stocker le jeton
  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload; // Ajoute une action pour définir le jeton
    },
    
    logoutToken: (state) => {
      state.token = null; // Efface le jeton lors de la déconnexion
    },
  },
});

export const {logoutToken , setToken  } = userSlice.actions;

export const selectToken = (state) => state.user.token;

export default userSlice.reducer;