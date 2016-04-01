import React from 'react';
import { ADD_TODO } from './actions';
import uuid from 'uuid';

const AddTodo = ({ store }) => {
  let input;

  const addTodo = (value) => {
    const text = value.trim();
    if (text === '') {
      return;
    }
    store.dispatch({
      type: ADD_TODO,
      id: uuid.v4(),
      text
    });
  };

  const handleAddTodo = () => {
    addTodo(input.value);
    input.value = '';
  };

  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="form-group">
      <div className="input-group">
        <input ref={ node => { input = node; } }
          className="form-control"
          placeholder="todo"
          type="text"
          onKeyDown={ checkEnter }
        />
        <div className="input-group-btn">
          <button className="btn btn-default" onClick={ handleAddTodo } >
            add
          </button>
        </div>
      </div>
    </div>
  );
};

AddTodo.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default AddTodo;
