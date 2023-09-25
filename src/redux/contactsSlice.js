import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    clearAll() {
      return [];
    },
  },
});

export const contactReducer = slice.reducer;
export const { setContact, deleteContact, clearAll } = slice.actions;

// import { createAction } from '@reduxjs/toolkit';
// import { createReducer } from '@reduxjs/toolkit';

// export const setContact = createAction('contacts/setContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const clearAll = createAction('contacts/clearAll');

// export const contactReducer = createReducer([], {
//   [setContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
//   [clearAll]: () => [],
// });

// export const contactsReducer = (state = [], action) => {
//   switch (action.type) {
//     case setContact.type:
//       return [...state, action.payload];

//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);

//     case clearAll.type:
//       return [];

//     default:
//       return state;
//   }
// };
