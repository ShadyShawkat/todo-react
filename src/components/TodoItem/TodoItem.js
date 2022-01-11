/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */

import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({
  id,
  text,
  completed,
  changeTodoState,
  deleteTodo,
  editTodo,
  globalEditingMode,
  setGlobalEditingMode,
}) => {
  const inputRef = useRef(null);
  const confirmEditBtn = useRef(null);

  useEffect(() => {
    if (!completed && globalEditingMode === id) {
      inputRef.current?.focus();
    }
  }, [globalEditingMode]);

  const editHandler = () => {
    if (!completed) {
      setGlobalEditingMode(id);
    }
  };

  const changeTodoTextHandler = (e) => {
    if (e.type === 'blur' && e.relatedTarget !== confirmEditBtn.current) {
      inputRef.current.value = text;
      setGlobalEditingMode(-1);
    } else if (
      e.key === 'Enter' ||
      e.relatedTarget === confirmEditBtn.current
    ) {
      if (inputRef.current.value.trim() === '') {
        inputRef.current.value = text;
        setGlobalEditingMode(-1);
        return;
      }
      editTodo(id, inputRef.current.value.trim());
      inputRef.current.value = inputRef.current.value.trim();
      setGlobalEditingMode(-1);
    }
  };

  return (
    <li
      className={`${styles['todo-item']} ${
        completed && styles['todo-completed']
      }`}
    >
      <input
        type="checkbox"
        id={id}
        defaultValue={text}
        checked={completed}
        className={styles['todo-check']}
        onChange={() => changeTodoState(id)}
      />
      <input
        ref={inputRef}
        type="text"
        disabled={globalEditingMode !== id}
        defaultValue={text}
        className={styles['todo-text']}
        onKeyUp={changeTodoTextHandler}
        onBlur={changeTodoTextHandler}
      />
      {globalEditingMode !== id && (
        <>
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
            onClick={editHandler}
          >
            <i className="fas fa-pen" />
          </button>
        </>
      )}
      {!completed && globalEditingMode === id && (
        <button
          ref={confirmEditBtn}
          className={styles['edit-btn']}
          type="button"
        >
          <i className="fas fa-edit" />
        </button>
      )}
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  changeTodoState: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  globalEditingMode: PropTypes.number.isRequired,
  setGlobalEditingMode: PropTypes.func.isRequired,
};

export default TodoItem;
