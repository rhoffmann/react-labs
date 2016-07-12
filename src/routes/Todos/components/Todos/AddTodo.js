import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actionCreator';


let AddTodo = ({ dispatch }) => {
  let input;

  const handleAddTodo = () => {
    const text = input.value.trim();
    if (text === '') { return; }
    dispatch(
      addTodo(text)
    );
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
  dispatch: React.PropTypes.func
};

// AddTodo = connect(
//   state => { return {} }, // this is default behaviour, can be passed as null
//   dispatch => { return { dispatch }; } // this is default behaviour, can be passed as null
// )(AddTodo);

AddTodo = connect()(AddTodo);

export default AddTodo;
