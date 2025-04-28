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
          items: state.contacts.items.filter(card =>
            card.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        },
      };
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;

// export const changeFilter = createAction('filters/changeFilter');

// export const filtersReducer = (state = initialState.filters.name, action) => {
//   switch (action.type) {
//     case 'filters/changeFilter':
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(card =>
//             card.name.toLowerCase().includes(action.payload.toLowerCase())
//           ),
//         },
//       };
//     default:
//       return state;
//   }
// };

// export const initialState = {
//   contacts: {
//     items: value(),
//   },
//   filters: {
//     name: '',
//   },
// };
