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
  console.log(setTodoList);

  return (
    <div className={styles.wrapper}>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
