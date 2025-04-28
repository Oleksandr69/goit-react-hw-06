import cardList from '../components/cardList.json';
import { createSlice } from '@reduxjs/toolkit';

const savedCards = window.localStorage.getItem('saved-cardItems');

const value = () => {
  if (savedCards !== null) {
    return JSON.parse(savedCards);
  } else {
    return cardList;
  }
};

export const initialValue = {
  contacts: {
    items: value(),
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

// export const contactsReducer = (state = initialState, action) => {
//   console.log(state);
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             card => card.id !== action.payload
//           ),
//         },
//       };
//     default:
//       return state;
//   }
// };
