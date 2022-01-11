import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddTodo.module.css';

const AddTodo = ({ AddTodo }) => {
  const [addInputValue, setAddInputValue] = useState('');

  const inputHandler = (e) => {
    setAddInputValue(e.target.value);
  };

  return (
    <div className={styles['add-todo']}>
      <input value={addInputValue} onChange={inputHandler} />
      <button
        type="button"
        disabled={addInputValue === ''}
        onClick={() => {
          AddTodo(addInputValue);
        }}
      >
        +
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  AddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
