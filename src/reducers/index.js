import { combineReducers } from "redux";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      state = state.concat(action.payload);
      break;
    case "DELETE_TASK":
      state = state.slice();
      state.splice(action.payload, 1);
      break;

    default:
      state = state;
  }

  return state;
};

const reducers = combineReducers({
  tasks: tasksReducer,
});

export default reducers;
