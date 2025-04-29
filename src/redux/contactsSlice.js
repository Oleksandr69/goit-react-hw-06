import cardList from '../components/cardList.json';
import { createSlice } from '@reduxjs/toolkit';

// const savedCards = window.localStorage.getItem('saved-cardItems');

// const value = () => {
//   if (savedCards !== null) {
//     return JSON.parse(savedCards);
//   } else {
//     return cardList;
//   }
// };

export const initialValue = {
  contacts: {
    // items: value(),
    items: cardList,
  },
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState: initialValue,
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            card => card.id !== action.payload
          ),
        },
      };
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
