import { useState } from 'react';
import styles from './App.module.css';

import TodoList from './components/TodoList/TodoList';

const todoDummyData = [
  {
    id: 1,
    text: 'Walk the dog',
    completed: true,
  },
  {
    id: 2,
    text: 'DO homework',
    completed: false,
  },
  {
    id: 3,
    text: 'work on project',
    completed: true,
  },
];

const App = () => {
  const [todoList, setTodoList] = useState(todoDummyData);

  const changeTodoState = (id) => {
    setTodoList((prevState) => {
      const newState = prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return newState;
    });
  };

  return (
    <div className={styles.wrapper}>
      <TodoList todoList={todoList} changeTodoState={changeTodoState} />
    </div>
  );
};

export default App;
