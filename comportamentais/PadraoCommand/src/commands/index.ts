import { createAction } from '@reduxjs/toolkit';

export enum CommandTypes {
  ADD_BOOK = 'ADD_BOOK'
}

export const addBookCommand = createAction<{ title: string; author: string }>(CommandTypes.ADD_BOOK);
