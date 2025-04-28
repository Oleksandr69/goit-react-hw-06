import { initialValue } from './contactsSlice';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: initialValue,
  reducers: {
    changeFilter: (state, action) => {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(card => {
            console.log(card.name.toLowerCase());
            console.log(action.payload.toLowerCase());

            card.name.toLowerCase().includes(action.payload.toLowerCase());
          }),
        },
        filters: {
          name: action.payload,
        },
      };
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
