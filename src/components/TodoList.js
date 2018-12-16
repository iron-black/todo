import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem action="Learn React" /></li>
      <li><TodoListItem action="Drink Coffee" /></li>
    </ul>
  );
};

export default TodoList;