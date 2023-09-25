export const changeFilter = newFilter => {
  return {
    type: 'filter/changeFilter',
    payload: newFilter,
  };
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/changeFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
