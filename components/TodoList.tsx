import React from 'react';
import { Todo } from '../model';
import './styles.css';
import SingleTodo from './SingleTodo';

interface Props {
  todo: Todo[];
  SetTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return <div className="todos"></div>;
  {
    todos.map((todo) => (
      <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
    ));
  }
};

export default TodoList;
