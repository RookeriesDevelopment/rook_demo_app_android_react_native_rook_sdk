import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  userID: string;
};

type UserPayload = {
  payload: UserState;
};

const slice = createSlice({
  name: 'userID',
  initialState: {
    userID: 'example@example.com',
  } as UserState,
  reducers: {
    changeUserID: (state, payload: UserPayload) => {
      const { userID } = payload.payload;
      state.userID = userID;
    },
  },
});

export const { changeUserID } = slice.actions;

export default slice.reducer;
