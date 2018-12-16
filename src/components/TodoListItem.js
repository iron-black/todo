import React from 'react';

const TodoListItem = (props) => {
  return (
    <span>{props.action}</span>
  );
};

export default TodoListItem;