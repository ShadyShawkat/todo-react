import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({
  id, text, completed, changeTodoState,
}) => (
  <li className={styles['todo-item']}>
    <input
      type="checkbox"
      id={id}
      value={text}
      checked={completed}
      className={styles['todo-check']}
      onChange={() => changeTodoState(id)}
    />
    <input type="text" disabled value={text} className={styles['todo-text']} />
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  changeTodoState: PropTypes.func.isRequired,
};

export default TodoItem;
