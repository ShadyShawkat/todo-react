import { useState } from 'react';
import styles from './App.module.css';

import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

const todoDummyData = [
  {
    id: 0,
    text: 'Walk the dog',
    completed: true,
  },
  {
    id: 1,
    text: 'DO homework',
    completed: false,
  },
  {
    id: 2,
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
    const newTodos = arrangeIds(todoList);
    newTodos.push({
      id: newTodos.length,
      text,
      completed: false,
    });
    setTodoList(newTodos);
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
    const newTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(arrangeIds(newTodos));
  };

  const editTodo = (id, newText) => {
    setTodoList((prevState) => {
      const newState = prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: newText,
          };
        }
        return todo;
      });
      return newState;
    });
  };

  return (
    <div className={styles.wrapper}>
      <AddTodo addTodo={addTodo} />
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
