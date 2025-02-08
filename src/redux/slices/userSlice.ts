import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userSliceInitialStateType} from '../../interface/userslice.interface';
import {storage} from '../../utils/Storage';

const initialState: userSliceInitialStateType = {
  userSlice: null,
  favorites: storage.getString('favorites')
    ? JSON.parse(storage.getString('favorites')!)
    : [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter(id => id !== productId);
      } else {
        state.favorites.push(productId);
      }
      storage.set('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const {toggleFavorite} = userSlice.actions;
export default userSlice.reducer;
