/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({
  id,
  text,
  completed,
  changeTodoState,
  deleteTodo,
  editTodo,
}) => (
  <li
    className={`${styles['todo-item']} ${
      completed && styles['todo-completed']
    }`}
  >
    <input
      type="checkbox"
      id={id}
      value={text}
      checked={completed}
      className={styles['todo-check']}
      onChange={() => changeTodoState(id)}
    />
    <input type="text" disabled value={text} className={styles['todo-text']} />
    <button
      className={styles['delete-btn']}
      type="button"
      onClick={() => deleteTodo(id)}
    >
      <i className="fas fa-trash-alt" />
    </button>
    <button
      className={styles['edit-btn']}
      type="button"
      onClick={() => editTodo(id)}
    >
      <i className="fas fa-pen" />
    </button>
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  changeTodoState: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
