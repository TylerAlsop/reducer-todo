export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: Date.now()
};
  
export const todoListReducer = (state, action) => {
  switch (action.type) {
    case "":
      return { ...state,  };
    case "":
      return { ...state, };
    default:
      return state;
  }
};
  