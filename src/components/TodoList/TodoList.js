import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todoList, changeTodoState }) => (
  <ul className={styles['todo-list']}>
    {todoList.map((todoItem) => (
      <TodoItem
        key={todoItem.id}
        id={todoItem.id}
        text={todoItem.text}
        completed={todoItem.completed}
        changeTodoState={changeTodoState}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(TodoItem).isRequired,
  changeTodoState: PropTypes.func.isRequired,
};

export default TodoList;
