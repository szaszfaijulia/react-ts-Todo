import React from 'react';
import { Todo } from '../model';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">Edit</span>
        <span className="icon">Delete</span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          Done
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

//import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
//import { MdDone } from "react-icons/md";
//import { AiFillEdit, AiFillDelete, MdDone } from "react-icons/all";
/*
<AiFillEdit />
<AiFillDelete />
<MdDone />
*/
