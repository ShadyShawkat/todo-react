import { useState } from 'react';
import styles from './App.module.css';

import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todoList];
    newTodos.push({
      id: Math.random(),
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
    setTodoList((prevState) => {
      const newTodos = prevState.filter((todo) => todo.id !== id);
      return newTodos;
    });
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

  const clearCompletedHandler = () => {
    setTodoList((prevState) => {
      const newState = prevState.filter((todo) => !todo.completed);
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
      {todoList.length > 0 && (
        <button
          type="button"
          className={styles['clear-completed-btn']}
          disabled={!todoList.find((todo) => todo.completed)}
          onClick={clearCompletedHandler}
        >
          Clear All Completed
        </button>
      )}
    </div>
  );
};

export default App;
