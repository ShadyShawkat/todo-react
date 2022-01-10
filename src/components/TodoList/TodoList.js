import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todoList }) => (
  <ul className={styles['todo-list']}>
    {todoList.map((todoItem) => (
      <TodoItem
        key={todoItem.id}
        id={todoItem.id}
        text={todoItem.text}
        completed={todoItem.completed}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(TodoItem).isRequired,
};

export default TodoList;
