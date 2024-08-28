import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Book } from '../store/types';

const initialState: AppState = {
  books: []
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
