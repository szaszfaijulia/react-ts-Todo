import React from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>('');
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };

  //console.log(todos)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      
      
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
//<TodoList />

/*
{todos.map((t) => (
  <li>{t.todo}</li>
))}
*/