/* eslint-disable object-curly-newline */

import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todoList, changeTodoState, deleteTodo, editTodo }) => {
  const [globalEditingMode, setGlobalEditingMode] = useState(-1);

  return (
    <>
      {todoList.length && (
        <ul className={styles['todo-list']}>
          {todoList.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              completed={todoItem.completed}
              changeTodoState={changeTodoState}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              globalEditingMode={globalEditingMode}
              setGlobalEditingMode={setGlobalEditingMode}
            />
          ))}
        </ul>
      )}
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(TodoItem).isRequired,
  changeTodoState: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoList;
