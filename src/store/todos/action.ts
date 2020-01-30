export const GET_TODO = 'todo/GET_TODO';
export const GET_TODO_SUCCESS = 'todo/GET_TODO_SUCCESS';
export const GET_TODO_FAILURE = 'todo/GET_TODO_FAIL';

export const getTodos = () => ({
  type: GET_TODO,
  payload: {
    request: {
      url: '/todos',
    },
  },
});
