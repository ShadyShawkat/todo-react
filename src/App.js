import { useState } from 'react';
import styles from './App.module.css';

import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

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

const arrangeIds = (arr) => {
  const newArr = arr.map((obj, index) => ({
    ...obj,
    id: index,
  }));
  return newArr;
};

const App = () => {
  const [todoList, setTodoList] = useState(todoDummyData);

  const addTodo = (text) => {
    const newArr = arrangeIds(todoList);
    newArr.push({
      id: newArr.length,
      text,
      completed: false,
    });
    setTodoList(newArr);
  };

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

  const deleteTodo = (id) => {
    console.log(id);
  };

  const editTodo = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.wrapper}>
      <AddTodo AddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        changeTodoState={changeTodoState}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
