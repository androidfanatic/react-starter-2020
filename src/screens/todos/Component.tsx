import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTodos } from 'src/store/todos/action';
import './Component.scss';

type RootState = {
  todos: Todo[];
};

const mapState = (state: ReduxStore): RootState => ({
  todos: state.todos.todos,
});

const mapDispatch = {
  getTodos,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Component = (props: PropsFromRedux) => {
  return (
    <div>
      <div>
        <button onClick={props.getTodos}>Get Todos</button> / <Link to="/">Home</Link>
      </div>
      {props.todos.map(todo => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};

export default connector(Component);
