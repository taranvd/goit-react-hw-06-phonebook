export const setContact = newContact => {
  return {
    type: 'contacts/setContact',
    payload: newContact,
  };
};

export const deleteContact = idContact => {
  return {
    type: 'contacts/deleteContact',
    payload: idContact,
  };
};

export const clearAll = () => {
  return {
    type: 'contacts/clearAll',
  };
};

export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/setContact':
      return [...state, action.payload];

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);

    case 'contacts/clearAll':
      return [];

    default:
      return state;
  }
};
