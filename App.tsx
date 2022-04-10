import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'
import InputField from './components/InputField'

const App: Reacct.FC = () => { 

  //const [todo, setTodo] = ReactDOM.useState("initialState")

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  )
}

export default App;
