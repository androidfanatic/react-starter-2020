import { GET_TODO_SUCCESS } from './action';

const initialState: TodosState = {
  todos: [],
};

type TodoPayload = {
  data: Todo[];
};

export default (state = initialState, action: ReduxAction<TodoPayload>) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODO_SUCCESS:
      return { ...state, todos: payload?.data };
    default:
      return state;
  }
};
