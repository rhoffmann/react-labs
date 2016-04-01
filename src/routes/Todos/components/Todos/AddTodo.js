import React from 'react';

const AddTodo = ({ onAddTodo }) => {
  let input;

  const handleAddTodo = () => {
    onAddTodo(input.value);
    input.value = '';
  };

  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo(input);
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
  // todo: React.PropTypes.object.isRequired,
  onAddTodo: React.PropTypes.func.isRequired
};

export default AddTodo;
